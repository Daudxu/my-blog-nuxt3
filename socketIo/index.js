const path = require("path");
const http = require("http");
const express = require("express");
const socketio = require("socket.io");
const formatMessage = require("./utils/messages");
const createAdapter = require("@socket.io/redis-adapter").createAdapter;
const redis = require("redis");
const jwt = require('jsonwebtoken');

require("dotenv").config();
const { createClient } = redis;
const {
  userJoin,
  getCurrentUser,
  userLeave,
  getRoomUsers,
} = require("./utils/users");

const app = express();
const server = http.createServer(app);
const io = socketio(server);

// const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1aWQiOjE2LCJleHAiOjE2OTQ0MTU0NTN9.97xCqwV9KvazYJx15KVVwEwbHrw2yEVTec4o-ROfraI'; // 替换为要验证的PHP生成的JWT令牌
// const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1aWQiOjE2LCJleHAiOjE2OTQ2NjkwNjh9.3cfk6NCI65xX5n2UatLkvWKWJNdzz_d76W5SVEnmF-Q'; // 替换为要验证的PHP生成的JWT令牌
const publicKey = 'secret-key'; // 替换为与PHP生成JWT时使用的公钥

// try {

//   // ----------------------------------------------------------------------------
//     // var tokensign = jwt.sign({ uid: 2 }, publicKey, { algorithm: 'HS256' });
//   // console.log('tokensign:', tokensign);
//   // ----------------------------------------------------------------------------
//   // jwt.verify(token, publicKey, { algorithms: ['HS256'] }, function (err, payload) {
//   //   // if token alg != RS256,  err == invalid signature
//   //   console.log("err", err)
//   //   console.log("payload", payload)
//   // });
//   // ----------------------------------------------------------------------------
//   const decoded = jwt.verify(token, publicKey, { algorithms: ['HS256'] });
//   console.log('JWT验证成功:', decoded);
//   // ----------------------------------------------------------------------------
// } catch (error) {
//   console.log('JWT验证失败:', error);
// }

// Set static folder
app.use(express.static(path.join(__dirname, "public")));

const botName = "Chat";

(async () => {
  pubClient = createClient({ url: "redis://127.0.0.1:6379" });
  await pubClient.connect();
  subClient = pubClient.duplicate();
  io.adapter(createAdapter(pubClient, subClient));
})();

// Run when client connects
io.on("connection", (socket) => {
  // console.log(io.of("/").adapter);
  const token = socket.handshake.query.token;
  // console.log('token:', token);
  // if(token){ 
  //     try {
  //         // ----------------------------------------------------------------------------
  //         const decoded = jwt.verify(token, publicKey, { algorithms: ['HS256'] });
  //         console.log('JWT验证成功:', decoded);
  //         // ----------------------------------------------------------------------------
  //     } catch (error) {
  //         console.log('JWT验证失败:', error);
  //     }
  // }
  socket.on("joinRoom", ({ username, room }) => {
    const user = userJoin(socket.id, username, room);

    socket.join(user.room);

    // Welcome current user
    socket.emit("message", formatMessage(botName, "Welcome to EZPalay!"));

    // Broadcast when a user connects
    socket.broadcast
      .to(user.room)
      .emit(
        "message",
        formatMessage(botName, `${user.username} has joined the chat`)
      );

    // Send users and room info
    io.to(user.room).emit("roomUsers", {
      room: user.room,
      users: getRoomUsers(user.room),
    });
  });

  // Listen for chatMessage
  socket.on("chatMessage", (msg) => {
    const user = getCurrentUser(socket.id);

    io.to(user.room).emit("message", formatMessage(user.username, msg));
  });

  // Runs when client disconnects
  socket.on("disconnect", () => {
    const user = userLeave(socket.id);
    if (user) {
        io.to(user.room).emit(
          "message",
          formatMessage(botName, `${user.username} has left the chat`)
        );

        // Send users and room info
        io.to(user.room).emit("roomUsers", {
          room: user.room,
          users: getRoomUsers(user.room),
        });
    }
  });
});

const PORT = 3030;

server.listen(
    PORT, 
    () => 
    console.log(`Server running on port ${PORT}`)
);

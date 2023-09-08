const uWS = require("uWebSockets.js");
const { Server } = require("socket.io");

const app = uWS.App();
const io = new Server();

io.attachApp(app);

io.on("connection", (socket) => {
  // ...
  console.log("=====");
});

app.listen(3010, (token) => {
  if (!token) {
    console.warn("端口已被使用");
  }
});

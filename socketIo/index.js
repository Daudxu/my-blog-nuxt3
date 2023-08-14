const { App } = require("uWebSockets.js");
const { Server } = require("socket.io");

const app = App();
const io = new Server();

io.attachApp(app);

io.on("connection", (socket) => {
    console.log("===")
});

app.listen(3010, (token) => {
  console.log("token", token)
  if (!token) {
    console.warn("port already in use");
  }
});
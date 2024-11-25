const express = require("express");
const http = require("http");
const { Server } = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = new Server(server);

io.on("connection", (socket) => {
  console.log("Bir kullanıcı bağlandı:", socket.id);

  socket.on("message", (message) => {
    console.log("Mesaj alındı:", message);
    io.emit("message", message); // Tüm kullanıcılara mesaj gönder
  });

  socket.on("disconnect", () => {
    console.log("Bir kullanıcı ayrıldı:", socket.id);
  });
});

server.listen(3001, () => {
  console.log("Sunucu 3001 portunda çalışıyor");
});

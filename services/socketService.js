// services/socketService.js
const { Server } = require("socket.io");

const createSocketServer = (httpServer) => {
    const io = new Server(httpServer, {
        cors: {
            origin: "http://localhost:3000",
            methods: ["GET", "POST"],
        },
    });

    io.on("connection", (socket) => {
        console.log(`User Connected: ${socket.id}`);
    });
};

module.exports = {
    createSocketServer,
};

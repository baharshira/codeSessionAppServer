// services/socketService.js
const { Server } = require("socket.io");

/**
 * Create Socket Server
 * @description Initializes and configures a WebSocket server using the provided HTTP server
 * @param {http.Server} httpServer - The HTTP server instance to attach the WebSocket server to
 * @returns {void}
 */
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

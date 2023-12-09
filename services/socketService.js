const { Server } = require("socket.io");

/**
 * Create Socket Server
 * @description Initializes and configures a WebSocket server using the provided HTTP server
 * @param {http.Server} httpServer - The HTTP server instance to attach the WebSocket server to
 * @returns {void}
 */
const createSocketServer = (httpServer) => {
    // Create a new Socket.IO server instance
    const io = new Server(httpServer, {
        cors: {
            origin: "http://localhost:3000",
            methods: ["GET", "POST"],
        },
    });

    // Event handler for a new WebSocket connection
    io.on("connection", (socket) => {
        console.log(`User Connected: ${socket.id}`);
    });
};

module.exports = {
    createSocketServer,
};

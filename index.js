/**
 * Module Imports
 */
const express = require("express");
const cors = require("cors");
const socketIo = require('socket.io');
const http = require('http');

// Import Routers and Database Connection Service
const {codeBlocksRouter} = require("./routers/codeBlocksRouter");
const {connectToDb, disconnectFromDb} = require("./services/db/connection");

// Create an Express app
const app = express();

// Configure CORS for the Express app
app.use(cors({
    origin: 'https://65746c23c999e561ea826a36--stalwart-daifuku-d0ae9a.netlify.app', // Client app's URL
    methods: ['GET', 'POST'] // Allowed HTTP methods
}));
app.use(express.json());

// Use the Code Blocks Router for API endpoints
app.use('/api/codeBlocks', codeBlocksRouter);


// Create an HTTP server using the Express app
const server = http.createServer(app);

const io = socketIo(server, {
    cors: {
        origin: 'https://65746c23c999e561ea826a36--stalwart-daifuku-d0ae9a.netlify.app', // Client URL
        methods: ['GET', 'POST']
    }
});


// Event handler for a new WebSocket connection
io.on('connection', (socket) => {
    // Event handler for 'codeChange' event
    socket.on('codeChange', (codeContent) => {
        console.log(`Received code change: ${codeContent}`)
        // Broadcast code changes to all clients except the sender
        socket.broadcast.emit('codeUpdate', codeContent);
    });
});

// Set the port for the server to listen on
const PORT = process.env.PORT || 3001;


// Connect to MongoDB and log the connection status
connectToDb()
    .then(()=>{
        console.log(`connected to db`)
    })

// Start listening on the specified port
server.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});

// Close MongoDB connection when the server stops
process.on('SIGINT', async () => {
    await disconnectFromDb();
    process.exit();
});

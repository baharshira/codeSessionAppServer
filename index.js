/**
 * module imprts
 */
const express = require("express");
const cors = require("cors");
const socketIo = require('socket.io');
const http = require('http');


const {codeBlocksRouter} = require("./routers/codeBlocksRouter");
const {connectToDb} = require("./services/db/connection");


const app = express();

// Configure CORS
app.use(cors({
    // origin: 'https://6573ac8040c3bb757995098e--precious-tiramisu-575d5c.netlify.app', // Client app's URL
    origin: 'http://localhost:3000', // Client app's URL
    methods: ['GET', 'POST'] // Allowed HTTP methods
}));
app.use(express.json());

app.use('/api/codeBlocks', codeBlocksRouter);




const server = http.createServer(app);

const io = socketIo(server, {
    cors: {
        origin: 'http://localhost:3000',
        methods: ['GET', 'POST']
    }
});

// io.on('connection', (socket) => {
//     // Handle WebSocket events
// });

io.on('connection', (socket) => {
    socket.on('codeChange', (codeContent) => {
        console.log(`Received code change: ${codeContent}`)
        // Broadcast code changes to all clients except the sender
        socket.broadcast.emit('codeUpdate', codeContent);
    });
});


const PORT = process.env.PORT || 3001;



connectToDb()
    .then(()=>{
        console.log(`connected to db`)
    })


server.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});

// Close MongoDB connection when the server stops
process.on('SIGINT', async () => {
    await mongoDal.disconnect();
    process.exit();
});

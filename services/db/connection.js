const { MongoClient, ServerApiVersion } = require('mongodb');

const MONGO_URL = "mongodb+srv://codeSessionsApp-backendUsername:WORLaEPsXY9Cm8Sn@codesessionsdb.rhco3f3.mongodb.net/?retryWrites=true&w=majority";

const client = new MongoClient(MONGO_URL, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

const connectToDb = async () => {
    try {
        await client.connect();
        console.log("Connected to MongoDB Atlas!");
    } catch (error) {
        console.error('Error connecting to MongoDB Atlas:', error);
    }
}

const getDbInstance = () => {
    return client.db('codeSessionsApp'); // return a db instance
}

const disconnectFromDb = async () => {
    try {
        await client.close();
        console.log("Disconnected from MongoDB Atlas!");
    } catch (error) {
        console.error('Error disconnecting from MongoDB Atlas:', error);
    }
}

module.exports = {
    connectToDb,
    disconnectFromDb,
    getDbInstance,
};

const { MongoClient, ServerApiVersion } = require('mongodb');


// I know that a more secured way is to use a secret or environment variable, rather than put the connection string in the code
const MONGO_URL = "mongodb+srv://codeSessionsApp-backendUsername:WORLaEPsXY9Cm8Sn@codesessionsdb.rhco3f3.mongodb.net/?retryWrites=true&w=majority";

/**
 * MongoDB client instance.
 * @constant {MongoClient}
 */
const client = new MongoClient(MONGO_URL, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

/**
 * Connect to MongoDB Atlas
 * @function
 * @async
 * @return {Promise<void>} A promise that resolves after successfully connecting to MongoDB Atlas.
 */
const connectToDb = async () => {
    try {
        await client.connect();
        console.log("Connected to MongoDB Atlas!");
    } catch (error) {
        console.error('Error connecting to MongoDB Atlas:', error);
    }
}

/**
 * Get MongoDB Database Instance
 * @function
 * @return {Db} The MongoDB database instance.
 */
const getDbInstance = () => {
    return client.db('codeSessionsApp'); // Return a DB instance
}

/**
 * Disconnect to MongoDB Atlas
 * @function
 * @async
 * @return {Promise<void>} A promise that resolves after successfully disconnecting to MongoDB Atlas.
 */
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

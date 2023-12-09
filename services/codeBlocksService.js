const codeBlocksDal = require('../dal/codeBlocksDal');
const mongoDal = require('./db/connection')

/**
 * Get Code Blocks Service
 * @description Retrieves code blocks from MongoDB
 * @returns {Promise<Array<Object>>} A promise that resolves to an array of code blocks
 * @throws {Error} Throws an error if there's an issue retrieving code blocks from MongoDB
 */
async function getCodeBlocks() {
    try {
        const db = mongoDal.getClient().db('codeSessionsApp');
        const collection = db.collection('codeBlocks');

        const codeBlocks = await collection.find({}).toArray();
        return codeBlocks;
    } catch (error) {
        console.error('Error retrieving codeBlocks from MongoDB:', error);
        throw error;
    }
}


module.exports = {
    getCodeBlocks,
};

const codeBlocksDal = require('../dal/codeBlocksDal');
const mongoDal = require('./db/connection')

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

// const getCodeBlockByTitle = async (title) => {
//     try {
//         const result = await codeBlocksDal.find({ title: title });
//         return result[0]; // Assuming the result is an array and you want to return the first match
//     } catch (error) {
//         console.error('Error in getCodeBlockByTitle (Service):', error);
//         throw error;
//     }
// };
module.exports = {
    getCodeBlocks,
    // getCodeBlockByTitle
};

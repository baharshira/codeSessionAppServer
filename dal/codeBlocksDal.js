

const {getDbInstance} = require("../services/db/connection");

/**
 * Find
 * @description an abstraction to find documents in a collection
 * @param params - an object containing the following:
 * @param params.collectionName - the name of the collection to search in
 * @param params.query - the query to search with
 * @param params.proj - the projection to use
 * @param params.options - the options to use
 * @return {Promise<*|*[]>}
 */
const  find = async (params) => {
    const { collectionName, query, proj, options } = params; // an object to define the parameter's fields

    // Get the MongoDB database instance
    const dbInstance = getDbInstance();

    const collection = dbInstance.collection(collectionName)

    //returning the result as an array after awaiting the asynchronous operation
    return await collection.find(query ?? {}, {projection: proj}).toArray()
}

/**
 * Update Documents in Collection
 * @description Updates documents in a MongoDB collection based on the specified parameters.
 * @param {Object} params - An object containing the following parameters:
 * @param {string} params.collectionName - The name of the collection to update.
 * @param {Object} params.query - The query to search for documents to update.
 * @param {Object} params.update - The update operation to apply to the matching documents.
 * @param {Object} params.options - The options to customize the update operation.
 * @return {Promise<Object>} A promise that resolves to the result of the update operation.
 */
const update = async (params) => {
    const { collectionName, query, update, options } = params;


    // Get the MongoDB database instance
    const dbInstance = getDbInstance();
    const collection = dbInstance.collection(collectionName)

    // Log the update parameters for debugging purposes
    console.log(`going to update with params: ${JSON.stringify({query, update, options})}`)

    // Perform the update operation and return the result
    return await collection.updateOne(query, {$set: update}, options)
}

module.exports = {
    find,
    update
};
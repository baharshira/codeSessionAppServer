

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
    const { collectionName, query, proj, options } = params;

    const dbInstance = getDbInstance();

    const collection = dbInstance.collection(collectionName)

    return await collection.find(query ?? {}, {projection: proj}).toArray()
}

/**
 * Update
 * @description an to update parameters in collection
 * @param params - an object containing the following:
 * @param params.collectionName - the name of the collection to update
 * @param params.query - the query to search with
 * @param params.proj - the projection to use
 * @param params.options - the options to use
 * @return {Promise<*|*[]>}
 */
const update = async (params) => {
    const { collectionName, query, update, options } = params;



    const dbInstance = getDbInstance();
    const collection = dbInstance.collection(collectionName)

    console.log(`going to update with params: ${JSON.stringify({query, update, options})}`)
    return await collection.updateOne(query, {$set: update}, options)
}

module.exports = {
    find,
    update
};
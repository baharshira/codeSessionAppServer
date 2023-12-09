const {find, update} = require("../dal/codeBlocksDal");


/**
 * Get All Code Blocks Titles Handler
 * @description Fetches all code block titles from the database and returns a promise with the result.
 * @return {Promise<Object>} A promise that resolves to the result of fetching code block titles.
 */
const getCodeBlocksTitlesHandler = async () => {
    const params = {
        collectionName: 'codeBlocks',
        proj: {title: 1, _id: 0} // Projection to get only the title fields
    }
    const result = await find(params)
    console.info(`result inside getCodeBlocksTitlesHandler is: ${JSON.stringify(result)}`);
    return result;
}


/**
 * Get A Specific Code Block By Title Handler
 * @description Fetches a specific code block from the database based on the provided title and returns a promise with the result.
 * @param {string} title - The title of the code block to fetch.
 * @return {Promise<Object>} A promise that resolves to the result of fetching the code block by title.
 */
const getCodeBlockByTitleHandler = async (title) => {
    const params = {
        collectionName: 'codeBlocks',
        query: {title: title} // Query by title, the title is given as a parameter and the query is by title
    }
    const result = await find(params)
    console.info(`result inside getCodeBlockByTitleHandler is: ${JSON.stringify(result)}`);
    return result;

}

/**
 * Check The Student's Solution Handler
 * @description Compares the student's solution with the corresponding code block solution in the database.
 * @param {string} title - The title of the code block.
 * @param {string} solution - The student's solution to check.
 * @return {Promise<Object>} A promise that resolves to the result of checking the student's solution.
 */
const checkCodeBlockSolutionByTitleHandler = async (title, solution) => {
    const params = {
        collectionName: 'codeBlocks',
        query: {title, solution} // Given the title and solution, checks the student's solution
    }
    const result = await find(params)
    console.info(`result inside checkCodeBlockSolutionByTitleHandler is: ${JSON.stringify(result)}`);
    return result;

}

/**
 * Save The Current Solution Handler
 * @description Saves the student's solution for a specific code block.
 * @param {string} title - The title of the code block.
 * @param {string} solution - The student's solution to save.
 * @return {Promise<Object>} A promise that resolves to the result of saving the student's solution.
 */
const saveCodeBlockSolutionByTitleHandler = async (title, solution) => {
    const params = {
        collectionName: 'codeBlocks',
        query: {title: title},
        update: {code: solution}
    }
    const result = await update(params)
    console.info(`result inside saveCodeBlockSolutionByTitleHandler is: ${JSON.stringify(result)}`);
    return result;

}


module.exports = {
    getCodeBlocksTitlesHandler,
    getCodeBlockByTitleHandler,
    checkCodeBlockSolutionByTitleHandler,
    saveCodeBlockSolutionByTitleHandler
};
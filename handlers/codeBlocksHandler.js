const {find, update} = require("../dal/codeBlocksDal");


/**
 * Get All Code Blocks Titles Handler
 * @description a function that build a params object and pass it to the find function
 * @return {Promise<*|*[]>}
 */
const getCodeBlocksTitlesHandler = async () => {
    const params = {
        collectionName: 'codeBlocks',
        proj: {title: 1, _id: 0} // a projection to get only the title fields
    }
    const result = await find(params)
    console.info(`result inside getCodeBlocksTitlesHandler is: ${JSON.stringify(result)}`);
    return result;
}


/**
 * Get A Specific Code Block By Title Handler
 * @description a function that gets a selected title from the user and returns the corresponding code block from the db
 * @return {Promise<*|*[]>}
 */
const getCodeBlockByTitleHandler = async (title) => {
    const params = {
        collectionName: 'codeBlocks',
        query: {title: title} //query by title
    }
    const result = await find(params)
    console.info(`result inside getCodeBlockByTitleHandler is: ${JSON.stringify(result)}`);
    return result;

}

/**
 * Check The Student's Solution Handler
 * @description a function that gets the student's solution and compare it to the db's solution
 * @return {Promise<*|*[]>}
 */
const checkCodeBlockSolutionByTitleHandler = async (title, solution) => {
    const params = {
        collectionName: 'codeBlocks',
        query: {title, solution} // given the title and solution, checks the student's solution
    }
    const result = await find(params)
    console.info(`result inside checkCodeBlockSolutionByTitleHandler is: ${JSON.stringify(result)}`);
    return result;

}

/**
 * Save The Current Solution Handler
 * @description a function that saves the student's solution
 * @return {Promise<*|*[]>}
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
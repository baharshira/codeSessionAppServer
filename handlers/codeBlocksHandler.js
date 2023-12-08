const codeBlocksService = require('../services/codeBlocksService');
const {find, update} = require("../dal/codeBlocksDal");


const getCodeBlocksTitlesHandler = async () => {
    const params = {
        collectionName: 'codeBlocks',
        proj: {title: 1, _id: 0}
    }
    const result = await find(params)
    console.info(`result inside getCodeBlocksTitlesHandler is: ${JSON.stringify(result)}`);
    return result;
}

const getCodeBlockByTitleHandler = async (title) => {
    const params = {
        collectionName: 'codeBlocks',
        query: {title: title}
    }
    const result = await find(params)
    console.info(`result inside getCodeBlockByTitleHandler is: ${JSON.stringify(result)}`);
    return result;

}

const checkCodeBlockSolutionByTitleHandler = async (title, solution) => {
    const params = {
        collectionName: 'codeBlocks',
        query: {title, solution}
    }
    const result = await find(params)
    console.info(`result inside checkCodeBlockSolutionByTitleHandler is: ${JSON.stringify(result)}`);
    return result;

}


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
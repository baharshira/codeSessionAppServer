const express = require('express');
const codeBlocksRouter = express.Router();
const {getAllTitlesController, getCodeBlockByTitleController, checkCodeBlockSolutionByTitleController,
    saveCodeBlockSolutionByTitleController
} = require("../controllers/codeBlocksController");

/**
 * endpoints of code blocks router
 */

// get all titles of code blocks
codeBlocksRouter.get('/titles', getAllTitlesController);

// get code block by title
codeBlocksRouter.get('/:title', getCodeBlockByTitleController);

// check solution by title
codeBlocksRouter.post('/check/:title', checkCodeBlockSolutionByTitleController)


// save current solution by title
codeBlocksRouter.post('/save/:title', saveCodeBlockSolutionByTitleController)


module.exports = {
    codeBlocksRouter
};
const express = require('express');
const codeBlocksRouter = express.Router();
const {getAllTitlesController, getCodeBlockByTitleController, checkCodeBlockSolutionByTitleController,
    saveCodeBlockSolutionByTitleController
} = require("../controllers/codeBlocksController");

/**
 * Endpoints of Code Blocks Router
 */

// Get all titles of code blocks
codeBlocksRouter.get('/titles', getAllTitlesController);

// Get code block by title
codeBlocksRouter.get('/:title', getCodeBlockByTitleController);

// Check solution by title
codeBlocksRouter.post('/check/:title', checkCodeBlockSolutionByTitleController)


// Save current solution by title
codeBlocksRouter.post('/save/:title', saveCodeBlockSolutionByTitleController)


module.exports = {
    codeBlocksRouter
};
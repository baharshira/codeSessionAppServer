const codeBlocks = require("../dal/codeBlocksDal");
const codeBlocksService = require('../services/codeBlocksService');
const {
    getCodeBlocksTitlesHandler,
    getCodeBlockByTitleHandler,
    checkCodeBlockSolutionByTitleHandler,
    saveCodeBlockSolutionByTitleHandler
} = require("../handlers/codeBlocksHandler");

const getAllTitlesController = async (req, res) => {
    try {
        const result = await getCodeBlocksTitlesHandler() // get all titles from handler;
        if (result) {
            return res.status(200).json({
                success: true,
                titles: result
            })
        } else {
            return res.status(404).json({
                success: false,
                message: 'no code blocks or no code blocks with titles found'
            })
        }
    } catch (error) {
        console.error(`[codeBlocksController](${getAllTitlesController.name}: error: ${error.message}.\n${error.stack})`)
        return res.status(500).json({
            success: false,
            message: error.message
        })
    }
}


const getCodeBlockByTitleController = async (req, res) => {
    const {title} = req.params; // Assuming the title is sent as a query parameter

    try {
        const codeBlock = await getCodeBlockByTitleHandler(title);

        if (codeBlock) {
            res.status(200).json({
                success: true,
                codeBlock: codeBlock
            })
        } else {
            res.status(404).json({
                success: false,
                message: 'code block not found'
            });
        }
    } catch (error) {
        console.error(`[codeBlocksController](${getCodeBlockByTitleController.name}: error: ${error.message}.\n${error.stack})`);
        res.status(500).json({
            success: false,
            message: error.message
        });
    }

}

const checkCodeBlockSolutionByTitleController = async (req, res) => {
    try {
        const {title} = req.params;
        const {solution} = req.body;
        console.log(`[codeBlocksController](${checkCodeBlockSolutionByTitleController.name}: title: ${title}, solution: ${solution}`)
        const codeBlock = await checkCodeBlockSolutionByTitleHandler(title, solution);
        console.log(`[codeBlocksController](${checkCodeBlockSolutionByTitleController.name}: codeBlock man: ${JSON.stringify(codeBlock)}`)
        if (codeBlock && codeBlock[0]) {
            return res.status(200).json({
                success: true,
                message: 'solution is correct'
            })
        } else {
            return res.status(404).json({
                success: false,
                message: 'solution is incorrect'
            })
        }
    } catch (error) {
        console.error(`[codeBlocksController](${checkCodeBlockSolutionByTitleController.name}: error: ${error.message}.\n${error.stack})`)
        return res.status(500).json({
            success: false,
            message: error.message
        })
    }
}


const saveCodeBlockSolutionByTitleController = async (req, res) => {
    try {
        const {title} = req.params;
        const {solution} = req.body;
        const codeBlock = await saveCodeBlockSolutionByTitleHandler(title, solution);
        if (codeBlock) {
            return res.status(200).json({
                success: true,
                message: 'solution saved'
            })
        } else {
            return res.status(404).json({
                success: false,
                message: 'solution not saved'
            })
        }
    } catch (error) {
        console.error(`[codeBlocksController](${saveCodeBlockSolutionByTitleController.name}: error: ${error.message}.\n${error.stack})`)
        return res.status(500).json({
            success: false,
            message: error.message
        })
    }
}

module.exports = {
    getAllTitlesController,
    getCodeBlockByTitleController,
    checkCodeBlockSolutionByTitleController,
    saveCodeBlockSolutionByTitleController
};
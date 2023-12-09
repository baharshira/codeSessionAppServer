const codeBlocks = require("../dal/codeBlocksDal");
const codeBlocksService = require('../services/codeBlocksService');
const {
    getCodeBlocksTitlesHandler,
    getCodeBlockByTitleHandler,
    checkCodeBlockSolutionByTitleHandler,
    saveCodeBlockSolutionByTitleHandler
} = require("../handlers/codeBlocksHandler");

/**
 * Get All Titles Controller
 * @description a controller to get all titles of code blocks from db
 * @param req - express request object
 * @param res - express response object
 * @return {Promise} express response
 */
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

/**
 * Get A Code Block For A Specific Title
 * @description a controller to get code blocks by title
 * @param req - express request object
 * @param res - express response object
 * @return {Promise} express response
 */
const getCodeBlockByTitleController = async (req, res) => {
    const {title} = req.params;
    try {
        const codeBlock = await getCodeBlockByTitleHandler(title); // returns the code block belongs to the given title

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


/**
 * Check The Student's Solution Controller
 * @description a controller to get the solution from the db, and compare to the student's solution
 * @param req - express request object
 * @param res - express response object
 * @return {Promise} express response
 */
const checkCodeBlockSolutionByTitleController = async (req, res) => {
    try {
        const {title} = req.params;
        const {solution} = req.body;
        const codeBlock = await checkCodeBlockSolutionByTitleHandler(title, solution); // passes the solution to corresponding handler
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

/**
 * Save The Student's Solution Controller
 * @description a controller save the student's solution
 * @param req - express request object
 * @param res - express response object
 * @return {Promise} express response
 */
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
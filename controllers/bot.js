const router = require('express').Router();
const {getSheetInfo} = require('../services/googleSheets.js')

router.get('/', async (req, res) => {
    const info = await getSheetInfo();
    let commands = {};

    info.forEach((value) => {
        let [firstCell, secondCell] = value;
        if (firstCell !== undefined) {
            commands[firstCell] = secondCell;
        }
    })

    console.log(commands.hasOwnProperty('test'));
    res.status(200).json({message: commands});
})


module.exports = router;
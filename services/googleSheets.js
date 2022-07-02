const {GoogleSpreadsheet} = require('google-spreadsheet');
const sheetAddress = '12eaJIQ6JRLuQGsWy56BweIROJbjCBXjLXkkbmZXI4aI';
const key = require('../credentials/google.json');
const doc = new GoogleSpreadsheet(sheetAddress);


async function getSheetInfo(){
    await doc.useServiceAccountAuth({
        client_email: key.client_email,
        private_key: key.private_key,
    })
    await doc.loadInfo();
    const sheet = await doc.sheetsByIndex[0];
    return sheet.getCellsInRange('A1:B1000');
}


module.exports = {
    getSheetInfo: getSheetInfo,
}


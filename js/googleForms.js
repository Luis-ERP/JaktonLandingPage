// import GoogleSpreadsheet from "google-spreadsheet";
const { GoogleSpreadsheet } = require("google-spreadsheet");

// Initialize the sheet - doc ID is the long id in the sheets URL
const creds = require('../hackatec-be2db0e9c44f.json'); // the file saved above
const doc = new GoogleSpreadsheet('1MmghT_PnnvHAq2ZzsI9UMH4btfY804Y4yo-Us2NaOLE');

// Initialize Auth - see more available options at https://theoephraim.github.io/node-google-spreadsheet/#/getting-started/authentication
doc.useServiceAccountAuth(creds)

doc.loadInfo(); // loads document properties and worksheets
console.log(doc.title);
doc.updateProperties({ title: 'renamed doc' });

const sheet = doc.sheetsByIndex[0]; // or use doc.sheetsById[id] or doc.sheetsByTitle[title]
console.log(sheet.title);
console.log(sheet.rowCount);

// adding / removing sheets
const newSheet = doc.addSheet({ title: 'hot new sheet!' });
// newSheet.delete();
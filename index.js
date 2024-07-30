const fs = require("fs");
const xlsx = require("xlsx");

module.exports.createTextFile = function (name, data) {
  data.forEach((record) => fs.appendFileSync(name, `${record}\n`));
};

module.exports.loadFileAsArray = function (filename, isExcel = false) {
  if (isExcel) {
    const workbook = xlsx.readFile(filename);
    const sheetName = workbook.SheetNames[0];
    const sheet = workbook.Sheets[sheetName];
    const data = xlsx.utils.sheet_to_csv(sheet);
    return data.toString().split("\n");
  } else {
    const data = fs.readFileSync(filename).toString().split("\n");
    return data;
  }
};

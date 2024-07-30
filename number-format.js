const { loadFileAsArray, createTextFile } = require("./index");
const path = require("path");

const filename = "CUSTOMER LIST.xlsx";
const boa_blast_file = "CustomerSheet1.csv";

function get_numbers(filename) {
  const ext = path.extname(filename).toLowerCase();
  let numbers;

  if (ext === ".csv") {
    numbers = loadFileAsArray(filename);
  } else if (ext === ".xlsx") {
    numbers = loadFileAsArray(filename, true);
  } else {
    console.error("Unsupported file format!");
    return;
  }

  for (let number of numbers) {
    number = number.replace(/[\s-]+/g, "");
    const list = number.split("/");

    list.forEach((num) => {
      if (!!parseInt(num)) {
        if (num.length === 9) num = "0" + num; // Corrected line
        if (num[0] === "0") num = `233${num.slice(1)}`;
        if (num.length > 9 && !isNaN(Number(num))) {
          createTextFile(boa_blast_file, [num]);
        }
      }
    });
  }
}

get_numbers(filename);

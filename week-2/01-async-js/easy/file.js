const fs = require("fs");

const filePath = "../a.txt";

fs.readFile(filePath, "utf8", (err, data) => {
  if (err) {
    console.error(`Error reading file: ${err.message}`);
    return;
  }

  // Process the file data
  console.log("File content:", data);
});

const dataToAppend = "\nhi there!!!!!";
fs.appendFile(filePath, dataToAppend, "utf8", (err) => {
  if (err) {
    console.error(`Error appending to file: ${err.message}`);
    return;
  }

  console.log("Data has been appended to the file.");
});

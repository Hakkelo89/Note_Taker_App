const fs = require("fs");
const path = require("path");

const writeToDb = (data) => {
  try {
    const filePath = path.join(__dirname, "../../db/db.json");
    fs.writeFileSync(filePath, data);
  } catch (err) {
    console.log(err);
  }
};

module.exports = writeToDb;

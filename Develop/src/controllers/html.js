const getStaticFilePath = require("../utils/getStaticFile");

const renderNotesPage = (req, res) => {
  const filePath = getStaticFilePath("notes");

  res.sendFile(filePath);
};

const renderIndexPage = (req, res) => {
  const filePath = getStaticFilePath("index");

  res.sendFile(filePath);
};

module.exports = {
  renderNotesPage,
  renderIndexPage,
};

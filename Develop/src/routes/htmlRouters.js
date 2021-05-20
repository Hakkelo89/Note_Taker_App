const { Router } = require("express");

const { renderNotesPage, renderIndexPage } = require("../controllers/html");

const router = Router();

router.get("/notes", renderNotesPage);

router.get("*", renderIndexPage);

module.exports = router;

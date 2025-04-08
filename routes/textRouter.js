const express = require("express");
const textControllers = require("../controllers/textControllers");

const router = express.Router();

router.route("/summarize").post(textControllers.summarize);

module.exports = router;

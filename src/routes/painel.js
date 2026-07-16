var express = require("express");
var router = express.Router();

var painelController = require("../controllers/painelController");

router.get("/grafico", function (req, res) {
    painelController.grafico(req, res);
});

module.exports = router;
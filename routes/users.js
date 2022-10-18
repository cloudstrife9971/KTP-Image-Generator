var express = require("express");
var router = express.Router();

router.get("/", function (req, res, next) {
  res.render("index",{ name: req.query.name, region: req.query.region });
});


module.exports = router;

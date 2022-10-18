var express = require("express");
var router = express.Router();
const puppeteer = require("puppeteer");

router.get("/", function (req, res, next) {
  (async () => {
    var name = req.query.name;
    var region = req.query.region;
    var data = req.params.data;
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(
      "http://localhost:3000/users/?" +
        "name=" +
        name +
        "&" +
        "region=" +
        region
    );
    await page.screenshot({ path: "KTP.jpeg" });
    await browser.close();
    res.download("KTP.jpeg");
  })();
});

module.exports = router;

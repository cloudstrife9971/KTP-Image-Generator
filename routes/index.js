var express = require("express");
var router = express.Router();
const puppeteer = require("puppeteer");

router.get("/", function (req, res, next) {
  (async () => {
    var nik = req.query.nik;
    var name = req.query.name;
    var region = req.query.region;
    var dob = req.query.dob;
    var gender = req.query.gender;
    var bloodType = req.query.bloodType;
    var address = req.query.address;
    var town = req.query.town;
    var district = req.query.district;
    var religion = req.query.religion;
    var maritalStatus = req.query.maritalStatus;
    var occupation = req.query.occupation;
    var citiizenship = req.query.citiizenship;
    var idValidity = req.query.idValidity;
    var region2 = req.query.region2;
    var issuanceIdDdate = req.query.issuanceIdDdate;

    const browser = await puppeteer.launch({ args: ["--no-sandbox"] });
    const page = await browser.newPage();
    await page.goto(
      // "http://localhost:"+process.env.PORT +"/users/?" +
      //  "http://localhost:3000/users/?"

      "http://localhost:3000/users/?" +
        "name=" +
        name +
        "&" +
        "region=" +
        region +
        "&" +
        "dob=" +
        dob +
        "&" +
        "gender=" +
        gender +
        "&" +
        "bloodType=" +
        bloodType +
        "&" +
        "address=" +
        address +
        "&" +
        "town=" +
        town +
        "&" +
        "district=" +
        district +
        "&" +
        "religion=" +
        religion +
        "&" +
        "maritalStatus=" +
        maritalStatus +
        "&" +
        "occupation=" +
        occupation +
        "&" +
        "citiizenship=" +
        citiizenship +
        "&" +
        "idValidity=" +
        idValidity +
        "&" +
        "region2=" +
        region2 +
        "&" +
        "issuanceIdDdate=" +
        issuanceIdDdate
    );
    await page.screenshot({ path: "KTP.jpeg" });
    await browser.close();
    res.download("KTP.jpeg");
    // res.send("Welcome to KTP image Downloader")
  })();
});

module.exports = router;

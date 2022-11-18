var express = require("express");
var router = express.Router();
const puppeteer = require("puppeteer");

router.get("/", function (req, res, next) {
  (async () => {
    var nik = req.body.nik;
    var name = req.body.name;
    var region = req.body.region;
    var dob = req.body.dob;
    var gender = req.body.gender;
    var bloodType = req.body.bloodType;
    var address = req.body.address;
    var town = req.body.town;
    var district = req.body.district;
    var religion = req.body.religion;
    var maritalStatus = req.body.maritalStatus;
    var occupation = req.body.occupation;
    var citiizenship = req.body.citiizenship;
    var idValidity = req.body.idValidity;
    var region2 = req.body.region2;
    var issuanceIdDdate = req.body.issuanceIdDdate;

    if (bloodType != undefined) {
      var bloodArray = [...bloodType];
      mappedarray = bloodArray.map((x) => {
        if (x == "+") {
          return "%2B";
        }
        return x;
      });
      var stringedarray = mappedarray.join("").toString();
    }
    const browser = await puppeteer.launch({ args: ["--no-sandbox"] });
    const page = await browser.newPage();
    await page.goto(
      // "http://localhost:3000/users/?" +
      "http://localhost:" +
        process.env.PORT +
        "/users/?" +
        "nik=" +
        nik +
        "&" +
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
        stringedarray +
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
    await page.screenshot({ path: "KTP.jpeg", type: "jpeg" });
    await browser.close();
    await res.download("KTP.jpeg");
  })();
});

module.exports = router;

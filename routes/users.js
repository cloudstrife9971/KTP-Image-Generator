var express = require("express");
var router = express.Router();

router.get("/", function (req, res, next) {
  res.render("index", {
    nik: req.query.nik,
    name: req.query.name,
    region: req.query.region,
    dob: req.query.dob,
    gender: req.query.gender,
    bloodType: req.query.bloodType,
    address: req.query.address,
    town: req.query.town,
    district: req.query.district,
    religion: req.query.religion,
    maritalStatus: req.query.maritalStatus,
    occupation: req.query.occupation,
    citiizenship: req.query.citiizenship,
    idValidity: req.query.idValidity,
    region2: req.query.region2,
    issuanceIdDdate: req.query.issuanceIdDdate
  });
});

module.exports = router;

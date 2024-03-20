let express = require("express");
let vaccinationRecordsRoute = express.Router();
const VaccinationRecordsDataModel = require("../models/VaccinationRecordsDataModel");


vaccinationRecordsRoute.get("/all", (req,res) => {
  VaccinationRecordsDataModel.find().then((records) => {
    res.send(records);
  }).catch((err) => {
    res.send("Error while Fetching Vaccination Records", err);
  })
})

module.exports = vaccinationRecordsRoute;
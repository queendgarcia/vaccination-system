let express = require("express");
let hospitalRoute = express.Router();
const HospitalDataModel = require("../models/HospitalDataModel");

hospitalRoute.post("/register", (req,res) => {
  let hospital = req.body;

  let newHospital = new HospitalDataModel(hospital);

  newHospital.save().then((createdHospital) => {
    console.log("Successful Hospital Registration");
    res.send(createdHospital);
  }).catch((err) => {
    res.send("Error Hospital Registration", err)
  })

})

hospitalRoute.get("/all", (req,res) => {
  HospitalDataModel.find().then((hospitals) => {
    res.send(hospitals);
  }).catch((err) => {
    res.send("Error while Fetching Hospitals", err);
  })
})

module.exports = hospitalRoute;
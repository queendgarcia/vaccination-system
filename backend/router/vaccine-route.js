let express = require("express");
let vaccineRoute = express.Router();
const VaccineDataModel = require("../models/VaccineDataModel");

vaccineRoute.post("/register", (req,res) => {
  let vaccineInfo = req.body
  let newVaccine = new VaccineDataModel(vaccineInfo);

  newVaccine.save().then((registeredVaccine) => {
    console.log("Successful Vaccine Registration", registeredVaccine)
    res.send(registeredVaccine);
  }).catch((err) => {
    console.log("Error Vaccine Registration", err);
    res.send("Error Vaccine Registration")
  })

})

vaccineRoute.get("/all", (req,res) => {
  VaccineDataModel.find().then((vaccines) => {
    res.send(vaccines);
  }).catch((err) => {
    res.send("Error while Fetching Vaccines", err);
  })
})

module.exports = vaccineRoute;
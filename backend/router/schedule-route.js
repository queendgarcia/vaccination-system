let express = require("express");
let scheduleRoute = express.Router();
const ScheduleDataModel  = require("../models/ScheduleDataModel");
const VaccinationRecordsDataModel = require("../models/VaccinationRecordsDataModel");

scheduleRoute.post("/complete", (req,res) => {
  let scheduleRecord = req.body;
  //req.body should have scheduleId property with the _id valud

  VaccinationRecordsDataModel.findOne({ userId: scheduleRecord.user._id }).then((existingRecord) => {
    if (existingRecord)  {
      console.log("found existing record for User", existingRecord);

      let dosesSupplied = existingRecord.dosesSupplied
      dosesSupplied.push(scheduleRecord);
      // adding the new vaccination record of that user to its document

      // save this updated document to the existing vaccination record
      existingRecord.save().then((record)=>{        
        console.log("Updated Existing Record: " + record)
        
        // remove the approved schedule from the pending schedules
        ScheduleDataModel.deleteOne({ _id: scheduleRecord.scheduleId }).then((schedule) => {
          console.log(`Vaccination schedule with id: ${scheduleRecord.scheduleId} has been completed and added to the vaccination records of the user`);
          res.send(schedule);
        }).catch((err) => {
          res.send("Error while Confirming Vaccination Done Status", err);
        })
      })
      .catch((err)=>{
        res.send("Error Occurred in Updating Existing Vaccination Record"+ err);
      })

    } else {
      let recordDetails = {
        userId: scheduleRecord.user._id,
        userName: scheduleRecord.user.name,
        userEmail: scheduleRecord.user.email,
        dosesSupplied: [ scheduleRecord ]
      }

      let newVaccinationRecord = new VaccinationRecordsDataModel(recordDetails)

      newVaccinationRecord.save().then((newRecord) => {
        console.log("Successful Saving New Vaccination Record");
         
        // remove the approved schedule from the pending schedules
        ScheduleDataModel.deleteOne({ _id: scheduleRecord.scheduleId }).then((schedule) => {
          console.log(`Vaccination schedule with id: ${scheduleRecord.scheduleId} has been completed and added to the vaccination records of the user`);
          res.send(schedule);
        }).catch((err) => {
          res.send("Error while Confirming Vaccination Done Status", err);
        })

      }).catch((errNewRecord) => {
        console.log("Error Saving New Vaccination Record", errNewRecord);
        res.send("Error Saving New Vaccination Record");
      })
    }
  }).catch((err) => {
    console.log("Error in Approval of Vaccination", err);
    res.send("Error in Approval of Vaccination");
  })

})

scheduleRoute.get("/all", (req,res) => {
  ScheduleDataModel.find().then((schedules) => {
    res.send(schedules);
  }).catch((err) => {
    res.send("Error while Fetching Sschedules");
  })
})

scheduleRoute.post("/create", (req,res) => {
  let newSchedule = new ScheduleDataModel(req.body);
  debugger;
  newSchedule.save().then((createdSchedule) => {
    res.send(createdSchedule);
  }).catch((err) => {
    res.send("Error while Creating a Schedule");
  })
})

scheduleRoute.get("/user", (req,res) => {
  debugger;
  console.log("from user schedule: " + req)
  ScheduleDataModel.find({ userId : req.query.id })
  .then((schedules) => {
    res.send(schedules);
  })
  .catch((err) => {
    console.log(err);
    res.send("Error in Getting User's Schedules");
  })
})


module.exports = scheduleRoute;
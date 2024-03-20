let mongooseObject = require("mongoose");
schemaObject = mongooseObject.Schema;

mongooseObject.connect("mongodb://127.0.0.1/vaccination-system");

let vaccinationRecordsSchema = new schemaObject({
  userId: String,
  userName: String,
  userEmail: String,
  dosesSupplied: []
},
{
  versionKey: false
}) 

let VaccinationRecordsDataModel = mongooseObject.model("vaccination-records", vaccinationRecordsSchema)

module.exports = VaccinationRecordsDataModel;
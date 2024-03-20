let mongooseObject = require("mongoose");
schemaObject = mongooseObject.Schema;

mongooseObject.connect("mongodb://127.0.0.1/vaccination-system");

let scheduleSchema = new schemaObject({
  vaccinationSchedule: { type: Date, default: new Date() },
  hospital : {
    _id: String,
    name: {type: String, required: true},
    address: {type: String, required: true},
    type: {type: String, required: true},
    charges: String
  },
  vaccine: {
    _id: String, 
    name: { type: String, required: true},
    type: {type: String, required: true},
    price: {type: String, required: true}, 
    requiredDosage: {type: Number, required: true},
    sideEffects: String
  },
  user: {
    _id:  String,
    isAdmin: {type: Boolean, default: false},
    email:{type: String, required : true},
    name: {type: String, required : true},
    age: {type: Number, required : true},
    sex: {type: String, required: true},
    contact: String,
    address: String
  }
},
{
  versionKey: false
}) 

let ScheduleDataModel = mongooseObject.model("schedule", scheduleSchema)

module.exports = ScheduleDataModel;
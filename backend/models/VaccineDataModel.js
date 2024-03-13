let mongooseObject = require("mongoose");
schemaObject = mongooseObject.Schema;

mongooseObject.connect("mongodb://127.0.0.1/vaccination-system");

let vaccineSchema = new schemaObject({
  name: { type: String, required: true},
  type: {type: String, required: true},
  price: {type: String, required: true}, 
  requiredDosage: {type: Number, required: true},
  origin: String,
  sideEffects: String,
  otherInfo: String
},
{
  versionKey: false
}) 

let VaccineDataModel = mongooseObject.model("vaccine", vaccineSchema)

module.exports = VaccineDataModel;
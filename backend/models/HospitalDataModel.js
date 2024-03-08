let mongooseObject = require("mongoose");
schemaObject = mongooseObject.Schema;

mongooseObject.connect("mongodb://127.0.0.1/vaccination-system");

let hospitalSchema = new schemaObject({
  name: {type: String, required: true},
  address: {type: String, required: true},
  type: {type: String, required: true},
  charges: {type: String, required: true}
},
{
  versionKey: false
}) 

let HospitalDataModel = mongooseObject.model("hospital", hospitalSchema)

module.exports = HospitalDataModel;
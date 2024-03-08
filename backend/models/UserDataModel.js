let mongooseObject = require("mongoose");
schemaObject = mongooseObject.Schema;

mongooseObject.connect("mongodb://127.0.0.1/vaccination-system");

let userSchema = new schemaObject({
  isAdmin: {type: Boolean, default: false},
  email:{type: String, required : true},
  password: {type: String, required : true}, 
  name: {type: String, required : true},
  age: {type: Number, required : true},
  profession: String,
  contact:  String,
  address: String,
  gender:  String,
  diagnosis: String
},
{
  versionKey: false
}) 

let UserDataModel = mongooseObject.model("user", userSchema)

module.exports = UserDataModel;
let mongooseObject = require("mongoose");
schemaObject = mongooseObject.Schema;

mongooseObject.connect("mongodb://127.0.0.1/vaccination-system");

let userSchema = new schemaObject({
  isAdmin: {type: Boolean, default: false},
  email:{type: String, required : true},
  password: {type: String, required : true}, 
  name: {type: String, required : true},
  age: {type: Number, required : true},
  contact: {type: String, required : true},
  address: String,
  profession: String,
  sex:  String,
  diagnosis: String
},
{
  versionKey: false
}) 

let UserDataModel = mongooseObject.model("user", userSchema)

module.exports = UserDataModel;
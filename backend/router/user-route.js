let express = require("express");
let UserRoute = express.Router();
const UserDataModel = require("../models/UserDataModel");

UserRoute.post("/sign-up", (req,res) => {
  let user = req.body;

  UserDataModel.findOne({ email: req.body.email}).then((existingUser) => {
    if (existingUser) {
      console.log("Email is already in-use.")
      res.send({ existingEmail: true})
    } else {
      let newUser = new UserDataModel(user);
      newUser.save().then((createdUser) => {
        console.log("Successful Sign-Up", createdUser._id);
        res.send({ _id: createdUser._id,
          isAdmin: createdUser.isAdmin,
          email: createdUser.email,
          name: createdUser.name,
          age: createdUser.age,
          profession: createdUser.profession,
          contact: createdUser.contact,
          address: createdUser.address,
          sex: createdUser.sex,
          diagnosis: createdUser.diagnosis
        })
      }).catch((err) => {
        console.log("Error Signing-Up", err);
        res.send("Error while Signing Up")
      })
    }
  }).catch((err) => {
    console.log("Error While Signing Up");
    res.send("Error while Signing Up", err);
  })

})

UserRoute.post("/login", (req,res) => {
  let user = req.body
  console.log(user);
  
  UserDataModel.findOne({ email: req.body.email}).then((existingUser) => {
    if (existingUser) {
      if (existingUser.password === req.body.password) {
        console.log("User exists.")
        res.send({  _id: existingUser._id,
          isAdmin: existingUser.isAdmin,
          email: existingUser.email,
          name: existingUser.name,
          age: existingUser.age,
          profession: existingUser.profession,
          contact: existingUser.contact,
          address: existingUser.address,
          sex: existingUser.sex,
          diagnosis: existingUser.diagnosis
        })
      } else {
        console.log("Wrong password");
        res.status(401).json({ error: "Wrong Password" })
      }
    } else {
      res.status(401).json({ error: "User does not exist" })
    }
  }).catch((err) => {
    // res.send("Error while Logging In - Existing User", err);
    res.status(401).json({ error: "User does not exist" })
  })

})

UserRoute.get("/all", (req,res) => {
  UserDataModel.find().then((allUsers) => {
    let usersInfo = allUsers.map((user) => {
      return ( {
      _id: user._id,
      isAdmin: user.isAdmin,
      email: user.email,
      name: user.name,
      age: user.age,
      profession: user.profession,
      contact: user.contact,
      address: user.address,
      sex: user.sex,
      diagnosis: user.diagnosis })
    })
    res.send(usersInfo);
  }).catch((err) => {
    res.send("Error while Fetching Users", err);
  })
})

module.exports = UserRoute;
console.log("Creating API using express server")

const express = require('express')
const app = express() 
const cors = require("cors");

const userApp = express();
const userRoutes = require("./router/user-route");

const hospitalApp = express();
const hospitalRoutes = require("./router/hospital-route");

const vaccineApp = express();
const vaccineRoutes = require("./router/vaccine-route");

app.use(cors()); 
// enabling cross-origin resource sharing at root level

app.use(express.json({limit:'2mb', extended:false})); 
//json middle-ware for setting request content type to json in body

app.use('/user', userApp) 
userApp.use('/',userRoutes)

app.use('/hospital', hospitalApp) 
hospitalApp.use('/', hospitalRoutes)

app.use('/vaccine', vaccineApp) 
vaccineApp.use('/', vaccineRoutes)

app.listen(9000)
console.log("API is running at http://localhost:9000")
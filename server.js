const express = require("express");
const app = express();
const {getJobs,postJob,updateJob,updateStatus,deleteJob} = require("controllers/jobsController")
//environment variables
const dotenv = require("dotenv").config();
const port = process.env.PORT;
//connect to the database
const dbConnection  = require("./db/db");
dbConnection();
app.use(express.json());
app.use(express.urlencoded({extended:false}))

app.get("/", getJobs)
//POST
app.post("/",postJob)

//DELETE
app.delete("/:id", deleteJob);
//UPDATE
app.put("/:id", updateJob);
app.put("/status/:id",updateStatus);
//goal routes
app.use("api/jobs", require("./routes/jobRoutes"));

app.listen(port || 5000, (req,res) =>{
    console.log(`listening on port ${port}`)    
})



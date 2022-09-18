const express = require("express");
const app = express();
const cors = require("cors");
//environment variables
const dotenv = require("dotenv").config();
const port = process.env.PORT;
//connect to the database
const dbConnection  = require("./db/db");
dbConnection();
app.use(express.json());
app.use(express.urlencoded({extended:false}))

app.use(cors({
    origin: "http://localhost:3000" || "https://63276598c049e4696af94983--heartfelt-pegasus-34387a.netlify.app/",
}))
app.use("/api/jobs", require("./routes/jobRoutes"));

app.listen(port || 5000, (req,res) =>{
    console.log(`listening on port ${port}`)    
})



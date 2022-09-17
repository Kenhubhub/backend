const mongoose = require("mongoose");


const dbConnect = async ()=>{
    try{
        const connect = await mongoose.connect(process.env.MONGO_URI);
        console.log("Database successfully initialised");
    }catch(err){
        console.log("Database connection failed with error: ", err);
        process.exit(1);
    }
}

module.exports = dbConnect;
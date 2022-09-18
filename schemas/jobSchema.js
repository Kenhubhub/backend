const mongoose = require("mongoose");
const jobSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    status: {
      type: String,
      required: true  
    },
    link: String,
    company: String,
    dateApplied: String
},{
    timestamps: true
})

module.exports = mongoose.model("job",jobSchema)
const mongoose = require("mongoose");
const asyncHandler = require("express-async-handler")
const Job = require("../schemas/jobSchema");
//GET   api/jobs
const check = (job) =>{
    if(!job){
        res.status(400);
        throw new Error("No record found");
    }
}
const getJobs = asyncHandler(async(req,res) =>{
    const jobs = await Job.find();
    check(jobs)
    res.json(jobs);
})

//POST api/jobs
const postJob = asyncHandler(async (req,res) =>{
    const response = req.body;
    const {title,status,company,link} = response;
    const job = await Job.create({
        title,
        status,
        link,
        company
    })
    res.json(job);
})
//Update api/jobs/id
const updateJob = asyncHandler(async (req,res)=>{
    const job = await Job.findById(req.params.id);
    check(job);
    const updatedJob = await Job.findByIdAndUpdate(req.params.id,req.body,{new: true})
    res.json(updatedJob)
})
//Update status     api/jobs/status/:id
const updateStatus = asyncHandler(async (req,res)=>{
    const job = await Job.findById(req.params.id);
    check(job);
    const newStatus = req.body.status;
    if(!newStatus){
        res.send("please add a status to update");
    }
    const updatedJob = await Job.findByIdAndUpdate(req.params.id,{status : newStatus},{new: true})
    res.json(updatedJob)
})
//Delete status api/
const deleteJob = asyncHandler(async(req,res)=>{
    const job = await Job.findById(req.params.id);
    check(job);
    console.log("check here")
    await Job.findByIdAndDelete(req.params.id);
    res.json({message : `Job with id:${req.params.id} has been successfully deleted`})
})

module.exports = {getJobs,postJob,updateJob,updateStatus,deleteJob};
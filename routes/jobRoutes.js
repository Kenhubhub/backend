const router = require("express").Router();
const {getJobs,postJob,updateJob,updateStatus,deleteJob} = require("../controllers/jobsController")
//GET   
router.get("/", getJobs)
//POST
router.post("/",postJob)

//DELETE
router.delete("/:id", deleteJob);
//UPDATE
router.put("/:id", updateJob);
router.put("/status/:id",updateStatus);


module.exports = router;
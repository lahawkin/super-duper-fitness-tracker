const router = require("express").Router(); 
const Workout = require ("../models/workout.js"); 

router.get("/api/workouts", function (req, res) {
    console.log("GET")
    Workout.find().then( data => {
         res.json(data); 

    })
    
})

router.post("/api/workouts", function( req, res) {
    console.log("Post"); 
    Workout.create({}).then(data=>{
        console.log(data);
        res.json(data);
    });

})

router.put("/api/workouts/:id", function(req, res) {
    
    console.log("put", req.params, req.body)
    Workout.findByIdAndUpdate(req.params.id, {$push:{exercises:req.body}}).then (data => {
        console.log(data);
        res.json(data); 
    }) 
})


module.exports = router; 
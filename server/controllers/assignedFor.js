//assigned for task controller --this should probably be more complex later on
const express = require('express');
const app = express.Router();

//userModel connects us to the list and functions we exported from the user.js file in the models folder
const taskModel = require('../models/tasks');

//make "magic numbers" constants instead of using them directly in code
const CREATED_STATUS = 201;

app
    //no need to get the whole list, we can do that with the tasks controller
    .get('/', (req, res) => {
        res.send('Place a user\'s id number at the end of the url to view the tasks assigned for them to complete');
    })

    //We can get a list of tasks based on who it is assigned for
    .get('/:assignedFor', (req,res) => {
        const tasks = taskModel.getAssignedFor(req.params.assignedFor);
        res.send(tasks);
    })
module.exports = app;
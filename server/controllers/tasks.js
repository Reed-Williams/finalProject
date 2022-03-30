//task controller
const express = require('express');
const app = express.Router();

//conect us to the different types of task controllers
const assignedByController = require('./assignedBy');
const assignedForController = require('./assignedFor');
const associatedWithController = require('./associatedWith');

//taskModel connects us to the list and functions we exported from the task.js file in the models folder
const taskModel = require('../models/tasks');
//make "magic numbers" constants instead of using them directly in code
const CREATED_STATUS = 201;

app
    //we can get the whole list
    .get('/', (req, res) => {
        res.send(taskModel.list);
    })

    //ASSIGNEDBY AND ASSIGNEDFOR and ASSIGNEDWITH all had off to their own controller
    .use('/assignedBy', assignedByController)
    .use('/assignedFor', assignedForController)
    .use('/associatedWith', associatedWithController)

    //we can make a new task
    .post('/', (req, res) => {
        console.log(req.body)
        const user = taskModel.create(req.body);
        console.log(req.body)
        res.status(CREATED_STATUS).send(user);
    })
    //we can remove a task from the list array based on its id
    .delete('/:id', (req, res)=>{
        const user = taskModel.remove(req.params.id);
        res.send({ success: true, errors: [], data: user });
    })
    //we can update certain info for a task based on its id
    .patch('/:id', (req, res)=>{
        const user = taskModel.update(req.params.id, req.body ); 
        res.send({ success: true, errors: [], data: user });
    })

module.exports = app;
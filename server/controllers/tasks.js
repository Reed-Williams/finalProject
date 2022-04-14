//task controller
const express = require('express');
const app = express.Router();


//taskModel connects us to the list and functions we exported from the task.js file in the models folder
const taskModel = require('../models/tasks');
//make "magic numbers" constants instead of using them directly in code
const CREATED_STATUS = 201;

app
    .get('/', (req, res, next) => {
        taskModel.getList()
        .then(tasks => res.json({ success: true, errors: [], data: tasks }))
        .catch(next);
    })
    .get('/:id', (req, res, next) => {
        taskModel.get(req.params.id)
            .then(tasks => res.json({ success: true, errors: [], data: tasks }))
            .catch(next);
    })
    //ASSIGNEDBY
    .get('/assignedBy/:assignedBy', (req, res, next) => {
        taskModel.getAssignedBy(req.params.assignedBy)
        .then(tasks => res.json({ success: true, errors: [], data: tasks }))
        .catch(next);
    })
    //ASSIGNEDFOR
    .get('/assignedFor/:assignedFor', (req, res, next) => {
        taskModel.getAssignedFor(req.params.assignedFor)
        .then(tasks => res.json({ success: true, errors: [], data: tasks }))
        .catch(next);
    })
    
    //ASSOCIATEDWITH
    .get('/associatedWith/:username', (req, res, next) => {
        taskModel.getAssociatedWith(req.params.username)
        .then(tasks => res.json({ success: true, errors: [], data: tasks }))
        .catch(next);
    })

    //get a single task from it's id
    .get('/:id', (req, res, next) => {
        taskModel.get(req.params.id)
        .then(tasks => res.json({ success: true, errors: [], data: tasks }))
        .catch(next);
    })

    //we can make a new task
    .post('/', (req, res, next) => {
        taskModel.create(req.body)
        .then(tasks => res.status(CREATED_STATUS).json({ success: true, errors: [], data: tasks }))
        .catch(next);
    })
    //we can remove a task from the list array based on its id
    .delete('/:id', (req, res, next) => {
        taskModel.remove(req.params.id)
        .then(tasks => res.json({ success: true, errors: [], data: tasks }))
        .catch(next);
    })
    //we can update certain info for a task based on its id
    .patch('/:id', (req, res, next) => {
        taskModel.update(req.params.id, req.body )
        .then(tasks => res.json({ success: true, errors: [], data: tasks }))
        .catch(next);
    })
    //I also want to be able to seed the db
    .post('/seed', (req, res, next) => {
        taskModel.seed()
        .then(x => {
            res.send({ success: true, errors: [], data: x.insertedIds });
        }).catch(next);
    })

module.exports = app;
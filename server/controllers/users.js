//user controller
const express = require('express');
const app = express.Router();

//userModel connects us to the list and functions we exported from the user.js file in the models folder
const userModel = require('../models/users');
//make "magic numbers" constants instead of using them directly in code
const CREATED_STATUS = 201;

app
    //we can get the whole list
    .get('/', (req, res) => {
        res.send(userModel.list);
    })
    //we can get a single user based on their id number
    .get('/:id', (req,res) => {

        const user = userModel.get(req.params.id);
        res.send(user);

    })
    //we can make a new user
    .post('/', (req, res) => {
        console.log(req.body)
        const user = userModel.create(req.body);
        console.log(req.body)
        res.status(CREATED_STATUS).send(user);
    })
    //we can remove a user from the list array
    .delete('/:id', (req, res)=>{
        const user = userModel.remove(req.params.id);
        res.send({ success: true, errors: [], data: user });
    })
    //we can update certain info from a user
    .patch('/:id', (req, res)=>{
        const user = userModel.update(req.params.id, req.body ); 
        res.send({ success: true, errors: [], data: user });
    })

module.exports = app;
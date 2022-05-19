//user controller 
const express = require('express');
const app = express.Router();

//require the authentication
const { requireAuth } = require('../models/auth');

//userModel connects us to the list and functions we exported from the user.js file in the models folder
const userModel = require('../models/users');
//make "magic numbers" constants instead of using them directly in code
const CREATED_STATUS = 201;

app
    //accessing the search method
    .get('/search/:s', (req, res, next) => {
        userModel.search(req.params.s)
        .then(users => {
            res.send({ success: true, errors: [], data: users });
        }).catch(next);
    })
    //we can get the whole list, with authentication
    .get('/', /*requireAuth,*/ (req, res, next) => {
        userModel.getList()
        .then(users => {
            res.send({ success: true, errors: [], data: users });
        }).catch(next);
    })
    //we can get a single user by their username
    .get('/username/:username', (req, res, next) => {
        userModel.getByUsername(req.params.username)
        .then(user => {
            res.send({ success: true, errors: [], data: user });
        }).catch(next);
    })
    //we can get a single user based on their id number
    .get('/:id', (req, res, next) => {

        userModel.get(req.params.id)
        .then(user => {
            res.send({ success: true, errors: [], data: user });
        }).catch(next);
    })
    //we can make a new user
    .post('/', (req, res, next) => {
        userModel.create(req.body)
        .then(user=> {
            res.send({ success: true, errors: [], data: user }); 
        })
        .catch(next);
    })
    //we can remove a user by id with authentication
    .delete('/:id', requireAuth, (req, res, next) => {
        userModel.remove(req.params.id)
        .then(user => {
            res.send({ success: true, errors: [], data: user });
        }).catch(next);
    })
    //we can update certain info from a user
    .patch('/:id', (req, res, next) => {
        userModel.update(req.params.id, req.body ) 
        .then(user=> {
            res.send({ success: true, errors: [], data: user });
        }).catch(next);
    })
    //we can login
    .post('/login', (req, res, next) => {
        userModel.login(req.body.username, req.body.password)
        .then(user => {
            res.send({ success: true, errors: [], data: user });
        }).catch(next);
    })
    //we can enter data in list to database
    .post('/seed', (req, res, next) => {
        userModel.seed()
        .then(x => {
            res.send({ success: true, errors: [], data: x.insertedIds });
        }).catch(next);
    })

module.exports = app;
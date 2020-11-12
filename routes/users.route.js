// 'use strict';

// const express = require('express');
// const router = express.Router();
// const User = require('../models/models')[0];
// const Course = require('../models/models')[1];
// const auth = require('basic-auth');
// const bcrypt = require('bcryptjs');

// //returns currently authenticated user if no authentication sent it will send "Authentication Required" message
// router.get('/users', checkForAuthentication, function (req, res, next) {
//     res.json(req.user);
// });



// //Creates a user, sets the Location header to "/", and returns no content
// router.post('/users', (req, res, next) => {
//     const newUser = req.body;
//     User.create(newUser, function (err, course) {
//         if (err) {
//             if (err.name === 'MongoError' && err.code === 11000) {
//                 const error = new Error("Email address is already in use");
//                 error.status = 409;
//                 return next(error);
//             }
//             if (err.name === 'ValidationError') return res.status(400).send(err.message);
//             return next(err);
//         }

//         res.location('/');
//         res.status(201).send();
//     });
// });

// //Returns a list of courses (including the user that owns each course)
// router.get('/courses', (req, res, next) => {
//     Course
//         .find({})
//         .populate('user', ['firstName', 'lastName'])
//         .exec(function (err, courses) {
//             if (err) return next(err);
//             res.json(courses);
//         });
// });


// // Returns a specific course (including the users name that owns the course)
// router.get('/courses/:id', (req, res, next) => {
//     Course
//         .findById(req.params.id)
//         .populate('user', ['firstName', 'lastName'])
//         .exec(function (err, course) {
//             if (err) {
//                 if (err.message.includes('ObjectId failed')) return res.status(404).send();
//                 return next(err);
//             }
//             res.json(course);
//         });
// });

// module.exports = user.router;
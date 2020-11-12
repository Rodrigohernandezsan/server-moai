// 'use strict';

// const express = require('express');
// const router = express.Router();
// const User = require('../models/models')[0];
// const Course = require('../models/models')[1];
// const auth = require('basic-auth');
// const bcrypt = require('bcryptjs');

// //Creates a course if the user exists in the database and attaches users id to the course, sets the Location header to the URI for the course, and returns no content
// router.post('/courses', checkForAuthentication, function (req, res, next) {
//     req.body.user = req.user._id;
//     const newCourse = req.body;

//     Course.create(newCourse, function (err, course) {
//         if (err) {
//             if (err.name === 'ValidationError') return res.status(400).send(err.message);
//             return next(err);
//         }
//         res.location(`localhost:5000/api/courses/${course._id}`);
//         res.status(201).send();
//     });
// });


// //Updates a course if the user is the owner of the course and returns no content
// router.put('/courses/:id', checkForAuthentication, function (req, res, next) {
//     Course
//         .findById(req.params.id)
//         .populate('user')
//         .exec(function (err, course) {
//             if (course.user.emailAddress !== req.user.emailAddress || course.user.password !== req.user.password) {
//                 return res.status(403).send();
//             }
//             course.set(req.body);
//             course.save(function (err, updatedCourse) {
//                 if (err) {
//                     if (err.name === 'ValidationError') return res.status(400).send(err.message);
//                     return next(err);
//                 }
//                 res.status(204).send();
//             });
//         });
// });

// //Deletes a course if the user is the owner of the course and returns no content
// router.delete('/courses/:id', checkForAuthentication, function (req, res, next) {
//     Course
//         .findById(req.params.id)
//         .populate('user')
//         .exec(function (err, course) {
//             if (err) return next(err);

//             if (course.user.emailAddress !== req.user.emailAddress || course.user.password !== req.user.password) {
//                 return res.status(403).send();
//             }

//             course.remove()
//             res.status(204).send();
//         });
// });

// //checks if the users credentials match a user in the database and sets req.user to the user
// function checkForAuthentication(req, res, next) {
//     const credentials = auth(req);

//     if (!credentials) {
//         return res.status(401).send();
//     }

//     User
//         .findOne({ emailAddress: credentials.name })
//         .exec(function (err, user) {
//             if (err) return next(err);
//             if (!user) return res.status(401).send();

//             bcrypt.compare(credentials.pass, user.password, function (err, same) {
//                 if (err) return next(err);
//                 if (!same) return res.status(401).send();

//                 req.user = user;
//                 next();
//             });
//         });
// }

// module.exports = router;
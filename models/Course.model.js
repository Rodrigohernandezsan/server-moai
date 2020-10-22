const mongoose = require('mongoose');
const { Schema } = mongoose;
const bcrypt = require('bcryptjs');

//Course schema
const CourseSchema = new Schema({
    user:{
        type: Schema.Types.ObjectId, ref: 'User',
        required: [true, 'User is requied!'] 
    },
    title: { 
        type: String,
        required: [true, 'Title is required!'] 
    },
    description: { 
        type: String,
        required: [true, 'Description is required!'] 
    },
    estimatedTime: String,
    materialsNeeded: String
});


const Course = mongoose.model('Course', CourseSchema);

module.exports = [Course];
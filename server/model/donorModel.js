const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const donorSchema = new Schema({
    name: {
        type: String,
        required: true
    },

    dob: {
        type: Date,
        required: true
    },

    blood_group: {
        type: String,
        required: true
    },

    gender: {
        type: String,
        enum: ['Male', 'Female'], // Restrict gender to specific values
        required: true
    },

    email: {
        type: String,
        required: true,
        unique: true
    },

    phone: {
        type: String,
        required: true
    },

    address: {
        type: String,
        required: true
    },

    createdAt: {
        type: Date,
        default: Date.now // Automatically set the creation date
    }
});

const donorModel = mongoose.model('donors', donorSchema);

module.exports = donorModel;
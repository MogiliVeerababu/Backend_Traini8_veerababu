
const mongoose = require("mongoose");

const trainiSchema = new mongoose.Schema({
    centerName: {
        type: String,
        required: true,
        maxlength: 40
    },
    centerCode: {
        type: Number,  // Fix: should be Number
        required: true
    },
    city: {
        type: String,
        required: true
    },
    state: {
        type: String, 
        required: true
    },
    pincode: {
        type: Number,  
        required: true
    },
    studentCapacity: {
        type: Number,
        required: true
    },
    courses: {
        type: [String],
        required: true
    },
    createdOn: {
        type: Date,
        default: Date.now
    },
    email: {
        type: String,
        required: true,
        unique: true,
        
    },
    phone: {
        type: Number,
        required: true,
        
    }
});

module.exports = mongoose.model("Traini", trainiSchema);

const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        
        required: [true, 'Name is required']
    },
    sex: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    country: {
        type: String,
        required: true
    },
    dateCreated: {
        type: Date       
    }
});

UserSchema.pre('save', function (next) {
    this.dateCreated = Date.now();
    next();
});

const User = mongoose.model('userdata', UserSchema);

module.exports = User;
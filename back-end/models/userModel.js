const mongoose = require('mongoose')

// Creating mongoose schema
const userSchema = new mongoose.Schema({
    userID: {
        type: String,
        required: [true, "A user must have an ID!"]
    },

    userName: {
        type: String,
        required: [true, 'A user must have a name!']
    },

    email: {
        type: String,
        required: [true, 'A user must have an email!'],
        unique: true
    },

    status: {
        type: String
    },

    joinedDate: {
        type: Date,
        default: Date.now(),
        select: false
    }
});

const User = mongoose.model('User', userSchema);
module.exports = User;
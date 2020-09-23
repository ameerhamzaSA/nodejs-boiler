const mongoose = require('mongoose')


const UserSchema = new mongoose.Schema({
    name: {type:String, required: true},
    age : {type: String, required: false},
    gender:{type: String, required: false},
    date:{type: Date, default:Date.now}
});

module.exports = mongoose.model('Users', UserSchema);
const mongoose = require('mongoose')

//scema design
const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true, 'name is req'],
    },

    email:{
        type:String,
        required:[true,'email req and should be unique'],
        unique: true,
    },

    password:{
        type:String,
        required:[true,'password required'],
    }
}, {timestamps: true} )

//export
const userModel = mongoose.model('users', userSchema )
module.exports = userModel
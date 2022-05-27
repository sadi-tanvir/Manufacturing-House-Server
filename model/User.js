const { Schema, model } = require('mongoose')



const userSchema = new Schema({
    name:String,
    email:String,
    phone:String,
    address:String,
    education:String,
    linkedin:String,
    productImage:String,
    github:String,
    role:{
        type:String,
        default: 'user'
    }
})

const User = new model('users', userSchema)

module.exports = User;
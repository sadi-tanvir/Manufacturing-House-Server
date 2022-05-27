const { Schema, model } = require('mongoose')



const reviewSchema = new Schema({
    email:String,
    name:String,
    rating:Number,
    message:String
})

const Review = new model('reviews', reviewSchema)

module.exports = Review;
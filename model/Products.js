const { Schema, model } = require('mongoose')



const productSchema = new Schema({
    name:String,
    image:String,
    description:String,
    unit_price:Number,
    Available_qty:Number,
    minimum_order_qty:Number
})

const Products = new model('products', productSchema)

module.exports = Products;
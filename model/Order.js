const { Schema, model } = require('mongoose')



const orderSchema = new Schema({
    userName: String,
    userEmail: String,
    userPhone: String,
    userAddress: String,
    productId: String,
    productName: String,
    productImage: String,
    unit_price: Number,
    orderQuantity: Number,
    totalAmount: Number,
    payment_status: {
        type: Boolean,
        default: false
    },
    trxId: {
        type:String,
        default:""
    },
    shipped:{
        type:Boolean,
        default: false
    }
})

const Order = new model('orders', orderSchema)

module.exports = Order;
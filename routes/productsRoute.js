const router = require('express').Router()
const Products = require('../model/Products')


// get all products
router.get('/products', async (req, res) => {
    const products = await Products.find({})

    res.json({
        success: true,
        products
    })
})



// get products by id
router.get('/product/:id', async (req, res) => {
    const product = await Products.findOne({_id: req.params.id})
    res.json({
        success: true,
        product
    })
})


module.exports = router
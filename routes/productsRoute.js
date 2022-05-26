const router = require('express').Router()
const Products = require('../model/Products')


router.get('/products', async (req, res) => {
    const products = await Products.find({})

    res.json({
        success: true,
        products
    })
})

module.exports = router
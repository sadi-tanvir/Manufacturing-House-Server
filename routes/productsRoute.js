const router = require('express').Router()
const Products = require('../model/Products')



// add product
router.post('/addProduct', async (req, res) => {
    const { name, image, description, unit_price, Available_qty, minimum_order_qty } = req.body;
    const newProduct = new Products({
        name,
        image,
        description,
        unit_price,
        Available_qty,
        minimum_order_qty
    })

    const product = await newProduct.save()
    res.json({
        success: true,
        product
    })
})

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
    const product = await Products.findOne({ _id: req.params.id })
    res.json({
        success: true,
        product
    })
})


module.exports = router
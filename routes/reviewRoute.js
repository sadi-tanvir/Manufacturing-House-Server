const router = require('express').Router()
const Review = require('../model/Review')


// add a review
router.post('/review', async (req, res) => {
    const {email,name, rating,message} = req.body;
    const review = new Review({
        email,name, rating,message
    })

    const result = await review.save()
    res.json({
        success: true,
        reviews: result
    })
})

// get all reviews
router.get('/reviews', async (req, res) =>{
    const reviews = await Review.find({})
    res.json({
        success: true,
        reviews: reviews
    })
})


module.exports = router
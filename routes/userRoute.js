const router = require('express').Router()
const User = require('../model/User')
// const jwt = require('jsonwebtoken')


// create user data
router.put("/user/:email", async (req, res) => {
    const userEmail = req.params.email;
    const { name, email, phone, address, education, linkedin, productImage, github } = req.body;

    const user = {
        name, email, phone, address, education, linkedin, productImage, github
    }
    const result = await User.updateOne({ email: userEmail }, { $set: user }, { new: true, upsert: true })
    // const token = jwt.sign({ email: userEmail }, process.env.SECRET_KEY, { expiresIn: '1d' })
    res.json({
        user: result,
    })
});

// get user data
router.get('/user/:email', async (req, res) => {
    const user = await User.findOne({ email: req.params.email })
    res.json({
        user
    })
})

// update user data
router.put('/updateUserInfo/:email', async (req, res) => {
    const userEmail = req.params.email;
    const { name, email, phone, address, education, linkedin, productImage, github } = req.body;
    const _user = await User.findOne({ email: userEmail})
    const user = {
        name, email, phone, address, education, linkedin, productImage, github, role:_user.role
    }
    const result = await User.updateOne({ email: userEmail }, { $set: user }, { new: true })
    res.json({
        success: true,
        result
    })
    
})

module.exports = router
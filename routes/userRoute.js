const router = require('express').Router()
const User = require('../model/User')


// create user data
router.put("/user/:email", async (req, res) => {
    const userEmail = req.params.email;
    const {name, email, phone, address, education, linkedin, productImage, github} = req.body;

    const user = {
        name, email, phone, address, education, linkedin, productImage, github
    }
    const result = await User.updateOne({email:userEmail}, {$set:user}, {new:true,upsert:true})
    const token = jwt.sign({email: userEmail}, process.env.SECRET_KEY, {expiresIn: '1d'})
    res.json({
        user,
        token
    })
});

module.exports = router
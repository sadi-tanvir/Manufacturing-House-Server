const router = require('express').Router()



router.get('/',(req, res) => {
    res.json({success:true, message: 'Welcome to our site'})
})

module.exports = router
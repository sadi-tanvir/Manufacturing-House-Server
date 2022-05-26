const mongoose = require('mongoose')

const url = `mongodb://localhost:27017/sadi-electric-house`
mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log(`MongoDB connected`))
.catch(error => console.log(error))
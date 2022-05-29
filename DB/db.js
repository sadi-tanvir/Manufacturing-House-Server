const mongoose = require('mongoose')


const url = `mongodb+srv://${process.env.USER}:${process.env.PASS}@cluster0.jnizw.mongodb.net/SADI-TECH-HOUSE?retryWrites=true&w=majority`;
// const url = `mongodb://localhost:27017/sadi-tech-house`
mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log(`MongoDB connected`))
.catch(error => console.log(error))
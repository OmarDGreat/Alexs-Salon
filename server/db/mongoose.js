const mongoose = require('mongoose')

// Connect to MongoDb Database
mongoose.connect( process.env.MONGODB_URI, {
    useNewUrlParser: true
    
})




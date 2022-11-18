const mongoose = require('mongoose')

// Connect to MongoDb Database
mongoose.connect( process.env.MONGODB_URI || 'mongodb://localhost/alex-salon', 
{
    useNewUrlParser: true,
    useUnifiedTopology: true
})

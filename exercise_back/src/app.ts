const connectDB = require('./db/connect')
const express = require('express')
const app = express()
const recettes = require('./routes/recettes')
const notFound = require('./middleware/not-found')
require('dotenv').config()
const errorHandlerMiddleware = require('./middleware/error-handler');


//middleware
app.use(express.json())

//routes
app.use('/api/v1/recette', recettes)

app.use(notFound)
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 5000
const start = async () => {
    try {
        await connectDB(process.env.MONGODB_URI)
        app.listen(port, () => console.log(`Serveur démarre sur le port ${port}!`))
    } catch(err) {
        console.log(err)
    }
}
start()
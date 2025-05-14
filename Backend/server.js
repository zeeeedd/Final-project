const express = require('express')
const dotenv = require('dotenv').config()
const connectDB = require ('./config/db')
const port = process.env.PORT ||  5000
const OfferRoutes = require('./routes/offersRoutes')
const cors = require("cors");
const path = require('path');

connectDB()

const app = express()

app.use(express.json());


app.use(cors()); // This allows all origins — good for development



app.use('/api/offers',OfferRoutes)
app.listen(port, () => console.log(`Server started on port ${port}`))

app.use('/uploads', express.static(path.join(__dirname, 'public/uploads')));
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
//Import route
const authRoute = require('./routes/auth');
const postroute = require('./routes/posts')

dotenv.config();

//connect to DB
mongoose.connect(process.env.DB_CONNECT,
    { useNewUrlParser: true },
    console.log('Connected to DB')
);

//Middlewares
app.use(express.json());
//Route Middlewares
app.use('/api/user', authRoute);
app.use('/api/posts', postroute);

app.listen(3000, () => console.log('the server is ruinning'));
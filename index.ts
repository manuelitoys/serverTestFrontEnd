const express = require('express');
require('dotenv').config();


//? Server express
const app = express();

//? Middleware static

app.use(express.static('public'));

//Lectura parseo 
app.use( express.json() );

//? Routes
app.use('/api/items', require('./routes/items'))

//? Listening
app.listen(process.env.PORT, () => {
    console.log(`Servidor Running ${ process.env.PORT }`);
});
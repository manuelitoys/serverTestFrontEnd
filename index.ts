const express = require('express');
require('dotenv').config();
const cors = require('cors');


//? Server express
const app = express();

//CORS
app.use(cors());

//? Public directory
app.use(express.static('public'));

//Lectura parseo del body
app.use( express.json() );

//? Routes
app.use('/api/items', require('./routes/items'))

//? Listening
app.listen(process.env.PORT, () => {
    console.log(`Servidor Running ${ process.env.PORT }`);
});
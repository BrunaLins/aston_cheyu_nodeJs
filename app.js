
require('dotenv').config();

const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

const agentRouter = require('./routes/agent');
const annonceRouter = require('./routes/annonce');
const buyerRouter = require('./routes/buyer');
const propertyRouter = require('./routes/property');



app.use('/agents', agentRouter);
app.use('/propertys', propertyRouter);
app.use('/annonces', annonceRouter);
app.use('/buyers', buyerRouter);

app.listen( port, ()=>{
  console.log('Server running');
})

module.exports = app;

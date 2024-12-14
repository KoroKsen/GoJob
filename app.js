import 'dotenv/config';
import routesGoJob from './routes/rout.js';
import bodyParser from 'body-parser';
import dbClient from './config/dbClient.js';
const express = require('express');
const mongoose = require('mongoose');
const authRoutes = require('./routes/auth');
const app = express();

mongoose.connect('mongodb://localhost:27017/gojob', { useNewUrlParser: true, useUnifiedTopology: true });

app.set('view engine', 'ejs');
app.use(express.static('public'));

// Rutas
app.use('/auth', authRoutes);

app.listen(3000, () => console.log('Servidor ejecutándose en el puerto 3000'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use('/rout', routesGoJob);

process.on('SIGINT', async () => {
    dbClient.cerrarConexcion();
    process.exit(0);
})


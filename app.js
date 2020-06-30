// import express from 'express';
const express = require('express');
const bodyParser = require('body-parser');
const stuffRoutes = require('./routes/stuff');
const userRoutes = require('./routes/user');
const path = require('path');

const app = express();

//MIDDLEWARES
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

app.use(bodyParser.json());
app.use('/images', express.static(path.join(__dirname, 'images'))); // à mettre au dessus des routes actuelles
app.use('/api/stuff', stuffRoutes);
app.use('/api/auth', userRoutes);



module.exports = app;
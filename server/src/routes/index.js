const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');

const employee = require('../controllers/index.js');

module.exports = app => {

    router.get('/', employee.index);
    router.post('/', employee.createEmail);
  
  
    app.use(router);
  
  };
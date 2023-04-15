const express = require('express');
require('dotenv').config();
var nodemailer = require('nodemailer');
const fs = require("fs");


// var transporter = nodemailer.createTransport({
//   service: 'gmail',
//   auth: {
//     // user: process.env.SEND_EMAIL,
//     // pass: process.env.PASSWORD
//     user: 'dumbanddumber.aws@gmail.com',
//     pass: 'Dumbwe@1234'
//   }
// });

const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    secure: false,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASSWORD
    }
  });

function sendEmail(to, subject, message, filename) {
  var mailOptions = {
    from: process.env.SEND_EMAIL,
    to: to, //To add multiple <to: 'recipient1@gmail.com, recipient2@gmail.com',>
  //   cc:'YYYYYYYY@gmail.com',
  //   bcc:'ZZZZZZZ@gmail.com',
    subject: subject,
    text: message,
    //html: '<h1>Challan</h1><p>The challan is attached below</p>'
    attachments: [
      {
        filename: filename,
        content: fs.createReadStream(filename),
      },
    ],
  };

  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
  }

module.exports = sendEmail;
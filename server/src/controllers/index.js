//const Employee = require('../models/index.js');
const nodemailer = require('nodemailer');


const Ctrl = {};

Ctrl.index = (req, res) => {
    res.json({
     status: 'Employees goes here'
});
}

Ctrl.createEmail = async (req, res) =>{

    console.log(req.body);
    const { name, email, consulta } = req.body;

    contentHTML = `
        <h1>User Information</h1>
        <ul>
            <li>Username: ${name}</li>
            <li>User Email: ${email}</li>
        </ul>
        <p>${consulta}</p>
    `;

  //console.log(contentHTML);
  res.json({'status': 'emp saved'});


  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
     user: 'lehj09@gmail.com',
     pass: 'terremototo111'
   }
   });
   
   
   let mailOptions = {
    from: 'lehj09@gmail.com',
    to: 'jhessle04@gmail.com',
    subject: 'email node',
    html: contentHTML
   
   };

   
   transporter.sendMail(mailOptions, function(error, info){
    if (error) {
     console.log(error);
    }else{
     console.log('Email sent: ' + info.response);
    }
   });



}
module.exports = Ctrl;

const nodemailer = require('nodemailer');

const transport = nodemailer.createTransport({
  service: "gmail",
  auth:{
    user:"senderEmail",
    pass:"senderEmailPassword"
  }
});
var mailOption = {
  from:'senderEmail', 
  to : 'receiverEmail',
  subject :'receive from server',
  text : 'Hell Zeeshan Nawaz I am Server '
};

transport.sendMail( mailOption, function (error,info){
  if (error){
    console.log(error)
  } else {
    console.log('Email send ' + info.response);
    console.log('Your mail has been send')
  }
});

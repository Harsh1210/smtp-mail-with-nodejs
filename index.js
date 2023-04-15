const express = require('express');
const sendEmail = require('./sendEmail');


//creating express object
const app = express();

app.use(express.json());

app.post('/send-email', (req, res) => {
    const { to, subject, message, filename } = req.body;
    sendEmail(to, subject, message, filename);
    res.status(200).json({ message: 'Email sent successfully' });
  });

//Handling GET request 
app.get('/', (req,res) => {
    res.send('A simple Node App is running on this server')
    res.end()
})

//PORT number
const PORT = process.env.PORT || 3000;

//Server Startup
app.listen(PORT, console.log(`Server started on port ${PORT}`));
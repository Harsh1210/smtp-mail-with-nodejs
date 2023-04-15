To install:

clone the code
npm install
npm start

Request body:

{
  "to": "dg.devansh.dg@gmail.com",
  "subject": "Test Email",
  "message": "This is a test email sent from Node.js using Gmail SMTP server",
  "filename": "allpdf.pdf"
}

curl --location 'http://localhost:3000/send-email' \
--header 'Content-Type: application/json' \
--data-raw '{
  "to": "dg.devansh.dg@gmail.com",
  "subject": "Test Email",
  "message": "This is a test email sent from Node.js using Gmail SMTP server",
  "filename": "allpdf.pdf"
}'
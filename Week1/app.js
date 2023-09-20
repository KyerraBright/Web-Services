const express = require('express');
const bodyParser = require('body-parser');
const mongodb = require('./db/connect');

console.log("past first const!");

const port = process.env.PORT || 8080;
const app = express();
console.log("past second const!");

app
  .use(bodyParser.json())
  .use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    next();
  })
  .use('/', require('./routes'));
console.log("past the app function!");

mongodb.initDb((err, mongodb) => {
  console.log("Inside the initDb callback!"); // Check if this message is logged
  if (err) {
    console.log("Error:", err); // Log the error message
  } else {
    app.listen(port);
    console.log(`Connected to DB and listening on ${port}`);
  }
  console.log("Done!");
});

var express = require('express');
var app = express();

app.use('/', require('./routes'));

app.listen(3000, () => {
    console.log('listening on port 3000');
});
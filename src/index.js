const express = require('express');
const app = express();

//middlware
app.use(express.json());  
app.use(express.urlencoded({extended: false}));

// routes
app.use(require('./routes/index'));
app.use(require('./routes/routes.products'));


app.listen(4000);
console.log('Server on port 40000');


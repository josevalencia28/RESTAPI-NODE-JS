const express = require('express');
const cors = require('cors')
const { logErrors, errorHandler, boomErrorHandler} = require('./middleware/error.handler')

const app = express();


//middlware
app.use(express.json());  
app.use(express.urlencoded({extended: false}));
app.use(cors());

// routes
app.use(require('./routes/index'));
app.use(require('./routes/routes.products'));

app.use(logErrors);
app.use(errorHandler);
app.use(boomErrorHandler);

app.listen(4000); 
console.log('Server on port 40000');


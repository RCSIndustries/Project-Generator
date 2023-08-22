const path = require('path');
const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const bodyParser = require('body-parser');
const app = express();
const publicPath = path.join( "./",'public');

app.use(express.static(publicPath));
app.use(helmet());
app.use(morgan('dev'));
app.use(bodyParser.json());

require("./routes/routes.js")(app);
const port = process.env.PORT ||4000;
app.listen(port, () => {
    console.log('API is Running!');
});
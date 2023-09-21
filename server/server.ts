const path = require('path');
const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const bodyParser = require('body-parser');
const app = express();
const publicPath = path.join( "./",'public');
const cors = require('cors');

app.use(express.static(publicPath));
app.use(helmet());
app.use(morgan('dev'));
app.use(cors());
app.use(bodyParser.json());

require("./config/routes/adminroutes")(app);
require("./config/routes/routes.ts")(app);

//Initial APP here

const serverPort =4000;
app.listen(serverPort, () => {
    console.log('API is Running on:  ',serverPort);
});

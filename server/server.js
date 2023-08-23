const path = require('path');
const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const bodyParser = require('body-parser');
const app = express();
const publicPath = path.join( "./",'public');
const mysql = require("mysql");

app.use(express.static(publicPath));
app.use(helmet());
app.use(morgan('dev'));
app.use(bodyParser.json());

require("./config/routes/routes.js")(app);
const port = process.env.PORT ||4000;

const connection = mysql.createConnection({
    host: '192.168.1.161',
    user: 'john4064',
    password: '',
    database: "testdb"       
  });

connection.connect(error => {
    if (error){
        console.log("A error has been occurred "
            + "while connecting to database.");       
        throw error;
    }
    app.listen(port, () => {
        console.log('API is Running!');
    });
});
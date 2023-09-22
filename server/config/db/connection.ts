const mysql = require("mysql");
const dotenv = require('dotenv');

//DOT ENV
dotenv.config();

const port = process.env.DB_PORT;
const dbHost = process.env.DB_HOST;
const dbUser= process.env.DB_USER;
const dbPassword= process.env.DB_PASSWORD;
const dbTable = process.env.DB;
let dbUrl = process.env.DB_URL;

if (process.env.NODE_ENV === 'test') {
    //SET TEST DB URL INSTEAD SET CREDENTIALS HERE
    dbUrl = process.env.TEST_DB_URL; 
}
console.log("HERE: ",process.env.TEST);
console.log("HERE: ",process.env.DB);

//dburl & port is undefined for some reason

const db_config = {
    host: dbHost,
    user: dbUser,
    password: dbPassword,
    database: dbTable,
    connectionLimit: 100, //important idk why at all
    debug: false
};


let pool;//Changed this from a connection to a pool to account for outages in the api


function handleDisconnect(){
    //connection = mysql.createConnection(db_config);
    pool = mysql.createPool(db_config);
    // open the MySQL connection
    // connection.connect(err => {
    //     if (err){
    //         console.log("Error when connecting to the db:",err);
    //         console.log("Reconnecting in one minute...");
    //         setTimeout(handleDisconnect,60000);
    //     }else{
    //         console.log("Successfully connected to the database.");
    //     }
    //     connection.on('error', function(err) {
    //         console.log('db error', err);
    //         if(err.code === 'PROTOCOL_CONNECTION_LOST') { // Connection to the MySQL server is usually
    //             handleDisconnect();                         // lost due to either server restart, or a
    //         } if(err.code === 'PROTOCOL_PACKETS_OUT_OF_ORDER'){
    //             handleDisconnect();
    //             //SQL server was turned off after connection
    //         }else { // connnection idle timeout (the wait_timeout
    //             throw err;
    //         }
    //     })
    //
    // });
}
handleDisconnect();


module.exports = pool;


//3
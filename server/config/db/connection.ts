const mysql = require("mysql");

let dbUrl = process.env.DB_URL;

if (process.env.NODE_ENV === 'test') {
    dbUrl = process.env.TEST_DB_URL;
}

//dburl & port is undefined for some reason

const db_config = {
    host: "192.168.1.161",
    user: "root",
    password: "Pandatiger101",
    database: "testdb",
    connectionLimit: 100, //important idk why
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
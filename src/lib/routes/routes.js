const rootcontroller = require("../controller/rootcontroller");
module.exports = (app) =>{

    var router = require("express").Router();

    router.get("/", rootcontroller.healthCheck);
    router.get("/version", rootcontroller.versionCheck);

    //Placeholder
    router.get("*", rootcontroller.catchAll);


    app.use('/api', router);
}
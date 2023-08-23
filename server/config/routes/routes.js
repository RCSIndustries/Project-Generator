const rootcontroller = require("../../controller/rootcontroller");
const projectcontroller = require("../../controller/projectcontroller");

module.exports = (app) =>{

    var router = require("express").Router();

    router.get("/", rootcontroller.healthCheck);
    router.get("/version", rootcontroller.versionCheck);

    router.get("/connect",projectcontroller.connect)


    //Placeholder
    router.get("*", rootcontroller.catchAll);


    app.use('/api', router);
}
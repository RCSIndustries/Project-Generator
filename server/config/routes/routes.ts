const rootcontroller = require("../../controller/rootcontroller");
const projectcontroller = require("../../controller/projectcontroller");
const admincontroller = require("../../controller/admincontroller");
module.exports = (app:any) =>{

    var router = require("express").Router();

    router.get("/", rootcontroller.healthCheck);
    router.get("/version", rootcontroller.versionCheck);

    router.get("/findall",projectcontroller.findAll)
    router.get("/findbyid/:id",projectcontroller.findById)


    router.get("/generate",projectcontroller.fetchRandom)
    router.get("/generate/lang/:lang",projectcontroller.fetchByLanguage)
    router.get("/generate/diff/:diff",projectcontroller.fetchByDifficulty)


    //admin controller
    router.get("/admin/delete/:id",admincontroller.delete)


    //Placeholder
    router.get("*", rootcontroller.catchAll);


    app.use('/api', router);
}
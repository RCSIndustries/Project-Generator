const admincontroller = require("../../controller/admincontroller");

module.exports = (app:any) =>{
    var router = require("express").Router();

    //admin controller
    router.delete("/delete/:id",admincontroller.delete);

    router.post("/create/",admincontroller.create);

    router.put("/updatename/:id",admincontroller.updateName);
    router.put("/updatedesc/:id",admincontroller.updateDesc);
    router.put("/updatelang/:id",admincontroller.updateLang);
    router.put("/updatediff/:id",admincontroller.updateDiff);


    //ADD AUTH!!!
    app.use('/admin', router);

}
const admincontroller = require("../../controller/admincontroller");

module.exports = (app:any) =>{
    var router = require("express").Router();

    //admin controller
    router.delete("/delete/:id",admincontroller.delete);

    router.post("/create/",admincontroller.create);

    router.put("/update/:id",admincontroller.update);

    app.use('/admin', router);

}
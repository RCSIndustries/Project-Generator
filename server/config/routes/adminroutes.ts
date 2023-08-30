const admincontroller = require("../../controller/admincontroller");

module.exports = (app:any) =>{
    var router = require("express").Router();

    //admin controller
    router.delete("/delete/:id",admincontroller.delete)

    router.post("/create/",admincontroller.create)

    app.use('/admin', router);

}
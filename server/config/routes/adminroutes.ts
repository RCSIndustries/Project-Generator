const admincontroller = require("../../controller/admincontroller");

module.exports = (app:any) =>{
    var router = require("express").Router();

    //admin controller
    router.get("/delete/:id",admincontroller.delete)
    app.use('/admin', router);

}
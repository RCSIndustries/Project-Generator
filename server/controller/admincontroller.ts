//This controller will be responsible for admin endpoints such as adding ideas, editing ideas, removing ideas, accessing log data
const adminService = require("../services/admin.service");


exports.delete = (req:any, res:any) => {
    //Todo: Fix error handling.
    adminService.removeById(req.params.id, (err:any, data:any):any => {
        if (err) {
            //Todo: Add if to check err.kind
            res.status(404).send({
                message: `ERROR ATM`
            });
        }else if(err== null && data ==null){
            res.status(400).send({
                message: 'Project not found at:'+req.params.id
            });
        }else{
            res.send({ message: 'Project idea '+req.params.id+' was deleted successfully!' });
        }
    });
};
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
            
        } else{
            res.send({ message: `Idea was deleted successfully!` });
        }
    });
};
const adminDb = require("../config/db/connection");

const AdminService = function(){
}

AdminService.removeById=(id:any, res:any)=>{
    let query = "delete from projects where project_id ="+id;
    adminDb.query(query,(err: any,sqlResult: any)=>{
        if(err){
            console.error("Error with SQL Request");
            res(null,err);
            return;
        }
        if(sqlResult.affectedRows==0){
            console.log("Not Found");
            res(null,null);
        }else{
            console.log(sqlResult);
            res(null,sqlResult)
        }
    });
}
module.exports = AdminService;
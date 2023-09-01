
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
            res(null,sqlResult)
        }
    });
}

AdminService.create=(newProject:any, res:any)=>{

    let query = `INSERT INTO projects(project_name, project_desc,project_lang,project_diff) values("${newProject.project_name}","${newProject.project_desc}","${newProject.project_lang}","${newProject.project_diff}");`;
    console.log(query)
    adminDb.query(query,(err:any,sqlResult:any)=>{
        if(err){
            console.error("Error with SQL Request");
            res(null,err);
            return;
        }
        res(null,sqlResult);
    })
}

AdminService.updateName=(id:number,body:any,res:any)=>{
    adminDb.query("UPDATE projects SET project_name = ? WHERE project_id = ?",[body.name,id],(err:any,sqlResult:any)=>{
        if(err){
            console.log("Error: ",err);
            res(err,null);
            return;
        }
        if (sqlResult.affectedRows === 0) {
            // not found Tutorial with the id
            res({ kind: "not_found" }, null);
            return;
        }
        console.log("Updated Project DB: ", { id: sqlResult.insertId});
        res(null,sqlResult.insertId)
    });
}

AdminService.updateDesc=(id:number,body:any,res:any)=>{
    adminDb.query("UPDATE projects SET project_desc = ? WHERE project_id = ?",[body.project_desc,id],(err:any,sqlResult:any)=>{
        if(err){
            console.log("Error: ",err);
            res(err,null);
            return;
        }
        if (sqlResult.affectedRows === 0) {
            // not found Tutorial with the id
            res({ kind: "not_found" }, null);
            return;
        }
        console.log("Updated Project DB: ", { id: sqlResult.insertId});
        res(null,sqlResult.insertId)
    });
}
module.exports = AdminService;
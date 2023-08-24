const db = require("../config/db/connection");

const projectService = function(){
    this.x=1;
}
projectService.findAll=(req,res)=>{
    let query = "SELECT * FROM projects";
    db.query(query,(err,sqlResult)=>{
        if(err){
            console.error("Error with SQL Request");
            res(null,err);
            return;
        }
        console.log("Projects Get All");
        res(null,sqlResult)
    });
}

projectService.findRandom=(req,res)=>{
    let query = "SELECT * FROM projects ORDER BY RAND() limit 1";
    
    db.query(query,(err,sqlResult)=>{
        if(err){
            console.error("Error with SQL Request");
            res(null,err);
            return;
        }
        console.log("Projects Get All");
        res(null,sqlResult)
    });
}

module.exports = projectService;
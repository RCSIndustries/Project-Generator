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
projectService.findById=(id,res)=>{
    let query = 'SELECT * FROM projects where project_id='+id;
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
        console.log("Fetch Random");
        res(null,sqlResult)
    });
}

projectService.findRandomByLang=(lang,res)=>{
    let query = 'SELECT * FROM projects WHERE project_lang = "'+lang+'" ORDER BY RAND() limit 1';
    db.query(query,(err,sqlResult)=>{
        if(err){
            console.error("Error with SQL Request");
            res(null,err);
            return;
        }
        console.log("Fetch Random by Language");
        res(null,sqlResult)
    });
}

projectService.findRandomByDiff=(diff,res)=>{
    let query = 'SELECT * FROM projects WHERE project_diff = "'+diff+'" ORDER BY RAND() limit 1';
    db.query(query,(err,sqlResult)=>{
        if(err){
            console.error("Error with SQL Request");
            res(null,err);
            return;
        }
        console.log("Fetch Random by Language");
        res(null,sqlResult)
    });
}

module.exports = projectService;
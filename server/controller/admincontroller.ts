//This controller will be responsible for admin endpoints such as adding ideas, editing ideas, removing ideas, accessing log data
const adminService = require("../services/admin.service"); 
exports.delete = async(req:any, res:any) => { 
    adminService.removeById(req.params.id, (err:any, data:any):any => {
        if (err) { 
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
exports.create = async(req:any,res:any) => {
    if (!req.body) {
        res.status(400).send({
            message: "Invalid Contents"
        });
    }
    // Create a Tutorial
    var tempProject={
        project_name: req.body.project_name,
        project_desc: req.body.project_desc,
        project_lang: req.body.project_lang,
        project_diff: req.body.project_diff};
    // Save Tutorial in the database
    adminService.create(tempProject, (err:any, data:any) => {
        if (err)
            res.status(500).send({
                message: err.message || "Some error occurred while creating the project idea."});
        else res.status(200).send(data);
    });
}

exports.updateName= async(req:any,res:any)=>{
    adminService.updateName(req.params.id,req.body, (err:any, data:any) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `Didnt find project ID ${req.params.id}.`
                });
            } else {
                res.status(500).send({
                    message: "Error retrieving project with id " + req.params.id
                });
            }
        } else{
            res.status(200).send({message:"Successful Update of project: "+req.params.id});
        } 
    });
}

exports.updateDesc= async(req:any,res:any)=>{
    adminService.updateDesc(req.params.id,req.body, (err:any, data:any) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `Didnt find project ID ${req.params.id}.`
                });
            } else {
                res.status(500).send({
                    message: "Error retrieving project with id " + req.params.id
                });
            }
        } else{
            res.status(200).send({message:"Successful Update of project: "+req.params.id});
        } 
    });
}

exports.updateLang= async(req:any,res:any)=>{
    adminService.updateLang(req.params.id,req.body, (err:any, data:any) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `Didnt find project ID ${req.params.id}.`
                });
            } else {
                res.status(500).send({
                    message: "Error retrieving project with id " + req.params.id
                });
            }
        } else{
            res.status(200).send({message:"Successful Update of project: "+req.params.id});
        } 
    });
}

exports.updateDiff= async(req:any,res:any)=>{
    adminService.updateDiff(req.params.id,req.body, (err:any, data:any) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `Didnt find project ID ${req.params.id}.`
                });
            } else {
                res.status(500).send({
                    message: "Error retrieving project with id " + req.params.id
                });
            }
        } else{
            res.status(200).send({message:"Successful Update of project: "+req.params.id});
        } 
    });
}

const projectService = require("../services/projectService")



exports.findAll = async(req:any,res:any) =>{
    const param = null;
    projectService.findAll(param, (err:any, data:any)=> {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving data."
            });
        else res.send(data);
    });
}

exports.findById = async(req:any,res:any) =>{
    projectService.findById(req.params.id, (err:any, data:any)=> {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving data."
            });
        else res.send(data);
    });
}

exports.fetchRandom = async(req:any,res:any) =>{
    const param = null;
    projectService.findRandom(param, (err:any, data:any)=> {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving data."
            });
        else res.send(data);
    });
}

exports.fetchByLanguage = async(req:any,res:any) =>{
    projectService.findRandomByLang(req.params.lang, (err:any, data:any)=> {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving data."
            });
        else res.send(data);
    });
}

exports.fetchByDifficulty = async(req:any,res:any) =>{
    //Todo: Create this get random by Difficulty
    projectService.findRandomByDiff(req.params.diff, (err:any, data:any)=> {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving data."
            });
        else res.send(data);
    });
}
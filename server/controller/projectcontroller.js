const projectService = require("../services/projectService")



exports.findAll = (req,res) =>{
    const param = null;
    projectService.findAll(param, (err, data)=> {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving data."
            });
        else res.send(data);
    });
}

exports.findById = (req,res) =>{
    console.log(req.params.id)
    projectService.findById(req.params.id, (err, data)=> {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving data."
            });
        else res.send(data);
    });
}

exports.fetchRandom = (req,res) =>{
    const param = null;
    projectService.findRandom(param, (err, data)=> {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving data."
            });
        else res.send(data);
    });
}

exports.fetchByLanguage = (req,res) =>{
    projectService.findRandomByLang(req.params.lang, (err, data)=> {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving data."
            });
        else res.send(data);
    });
}

exports.fetchByDifficulty = (req,res) =>{
    //Todo: Create this get random by Difficulty
    projectService.findRandomByDiff(req.params.diff, (err, data)=> {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving data."
            });
        else res.send(data);
    });
}
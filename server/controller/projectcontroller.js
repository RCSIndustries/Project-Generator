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
    //Todo: Create this get random by language
    projectService.findRandom(req.param.language, (err, data)=> {
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
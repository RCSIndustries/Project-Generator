var pjson = require('../../../package.json');


exports.healthCheck = (req, res) => {
    res.send("API IS RUNNING!");
};

exports.versionCheck = (req, res) => {
    res.send(pjson.version);
};
exports.catchAll = (req, res) => {
    res.send("Invalid Get Request");
};
exports.healthCheck = (req, res) => {
    res.send("API IS RUNNING!");
};

exports.versionCheck = (req, res) => {
    res.send(process.env.npm_package_version);
};
exports.catchAll = (req, res) => {
    res.send("Invalid Get Request");
};

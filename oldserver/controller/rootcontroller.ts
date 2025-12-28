exports.healthCheck = (req:any, res:any) => {
    res.send("API IS RUNNING!");
};

exports.versionCheck = (req:any, res:any) => {
    res.send(process.env.npm_package_version);
};
exports.catchAll = (req:any, res:any) => {
    res.send("Invalid Get Request");
};

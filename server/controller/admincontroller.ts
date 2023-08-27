//This controller will be responsible for admin endpoints such as adding ideas, editing ideas, removing ideas, accessing log data
const adminService = require("../services/adminService");


exports.delete = (req:any, res:any) => {
    Whitelist.remove(req.params.steamid, (err:any, data):any => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `Not found Whitelist with id ${req.params.steamid}.`
                });
            } else {
                res.status(500).send({
                    message: "Could not delete Whitelist with id " + req.params.steamid
                });
            }
        } else res.send({ message: `Whitelist was deleted successfully!` });
    });
};
const Joi = require('joi');

const schema = Joi.object({
    project_name: Joi.string()
        .min(3)
        .max(100)
        .required(),
    project_id: Joi.number()
        .integer()
        .min(0)
        .max(99999999)
        .required(),
    project_desc: Joi.string()
        .min(3)
        .max(34)
        .required(),
    project_lang: Joi.string()
        .min(3)
        .max(255)
        .required(),
    project_diff: Joi.string()
        .min(3)
        .max(255)
        .required(),

})

module.exports = schema;

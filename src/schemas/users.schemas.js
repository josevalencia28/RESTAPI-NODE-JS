const Joi = require('joi');

const id = Joi.string();
const name = Joi.string.min(3).max(30);
const email = Joi.string();

const createUsersSchemas = Joi.object({
    name: name.required(),
    email: email.required()
});

const  updateUsersSchemas = Joi.object({
    name: name.required(),
    email: email.required()
});


const deleteUsersSchemas = Joi.object({
    id: id.required()
})


module.exports = { createUsersSchemas, updateUsersSchemas,deleteUsersSchemas}



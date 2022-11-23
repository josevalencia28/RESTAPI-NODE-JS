const Joi = require('joi');

const id = Joi.string();
const name = Joi.string();
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



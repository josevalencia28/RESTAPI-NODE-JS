const { response } = require('express');
const validatorHandler = require('./../middleware/validador.handler');
const { createUsersSchemas,  updateUsersSchemas, deleteUsersSchemas} = require('./../schemas/users.schemas')
const conexion = require('../../database/conexion');
const {consultarUsers, consultarUsersById, CreateUsers, DeleteUsersById,updateUsersM} = require('./../model/modelo.query');


const getUsers = async (rq, res) => {
    const response = await consultarUsers();
    res.status(200).json(response.rows);
};

const getUserById = async (req, res) => {
    const id = req.params.id;
    const response = await consultarUsersById(id);
    res.json(response.rows);
}

const createUsers = async (req, res) => {
  //  validatorHandler(createUsersSchemas, 'body')
    const { name, email} = req.body;
    const response = await CreateUsers(name, email);
    console.log(response);
        res.json({
            message: 'User added successfully',
            body: {
                user: { name, email}
            }
        })
};

const deleteUsers = async (req, res) => {
    const id  = req.params.id;
    const response = await DeleteUsersById(id);
   console.log(response);
    res.json(`User ${id} deleted successfully`);
};
    
const updateUsers = async (req, res) => {
    const id = req.params.id;
    const { name, email} = req.body;
    const response = await updateUsersM(name, email,id);
  console.log(response);
    res.json({
        message: 'Userupdate successfully',
        body:{
            user: { name, email}
        }
    })
};

module.exports ={
    getUsers,
    getUserById,
    createUsers,
    deleteUsers,
    updateUsers
}
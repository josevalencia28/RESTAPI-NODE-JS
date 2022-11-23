const { response } = require('express');
const validatorHandler = require('./../middleware/validador.handler');
const { createUsersSchemas,  updateUsersSchemas, deleteUsersSchemas} = require('./../schemas/users.schemas')
const { Pool } = require('pg');

const pool = new Pool({
    host: 'localhost',
    user: 'postgres',
    password: 'Jose2808',
    database: 'firsapi',
    port: '5432'
});


const getUsers = async (rq, res) => {
    const response = await pool.query('SELECT * FROM users');
    res.status(200).json(response.rows);
};

const getUserById = async (req, res) => {
    const id = req.params.id;
    const response = await pool.query( 'SELECT * FROM users WHERE id = $1 ', [id]);
    res.json(response.rows);
}

const createUsers = async (req, res) => {
    validatorHandler(createUsersSchemas, 'body')
    const { name, email} = req.body;
    const response = await pool.query('INSERT INTO users(name,email) VALUES ($1, $2)', [name, email]);
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
    const response = await pool.query('DELETE FROM users WHERE id = $1',[id]);
    console.log(response);
    res.json(`User ${id} deleted successfully`);
};
    
const updateUsers = async (req, res) => {
    const id = req.params.id;
    const { name, email} = req.body;
    const response = await pool.query('UPDATE users SET name = $1,email = $2 WHERE id = $3 ',[name, email, id]);
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
const { Router} = require('express');
const router = Router();

const { getUsers, createUsers, updateUsers, getUserById, deleteUsers} = require('../controllers/index.controller');
//const { getProducts,createProducts,updateProducts,getProductsById,deleteProducts} = require('../controllers/controllers.products');

//Routes Users
router.get('/users', getUsers);
router.get('/users/:id', getUserById);
router.post('/users', createUsers);
router.delete('/users/:id',deleteUsers);
router.patch('/users/:id', updateUsers);



module.exports = router;


const { Router} = require('express');
const router = Router();

const { getUsers, createUsers, updateUsers, getUserById, deleteUsers} = require('../controllers/index.controller');


router.get('/users', getUsers);
router.get('/users/:id', getUserById);
router.post('/users', createUsers);
router.delete('/users/:id',deleteUsers);
router.patch('/users/:id', updateUsers);


module.exports = router;


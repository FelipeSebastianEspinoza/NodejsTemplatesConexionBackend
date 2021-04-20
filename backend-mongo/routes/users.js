var express = require('express');
var router = express.Router();

const usersController = require('../controllers/users.controller.js')

//crud
router.get('/', usersController.getUsers);
router.get('/:id', usersController.getUser);
router.post('/', usersController.createUser);
router.patch('/:id', usersController.editUser);
router.delete('/:id', usersController.deleteUser);


module.exports = router;


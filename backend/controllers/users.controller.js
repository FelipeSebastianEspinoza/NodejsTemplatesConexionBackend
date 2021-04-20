const userController = {}

userController.createUser = (req, res) =>
    res.send('create')

userController.getUsers = (req, res) =>
    res.send('getAll')

userController.getUser = (req, res) =>
    res.send('getOne')

userController.editUser = (req, res) =>
    res.send('edit')

userController.deleteUser = (req, res) =>
    res.send('delete')

module.exports = userController;
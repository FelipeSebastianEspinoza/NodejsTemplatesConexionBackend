const userController = {}

const User = require('../models/user')


userController.getUsers = async (req, res) => {
    const user = await User.find()
    res.json(user)
}

userController.getUser = async (req, res) => {
    const user = await User.findById(req.params.id)
    res.send(user)
}

userController.createUser = async (req, res) => {
    const newUser = new User(req.body)
    await newUser.save()
    res.send({ message: 'created' })
}

userController.editUser = async (req, res) => {
    await User.findByIdAndUpdate(req.params.id, req.body)
    res.json({ status: 'updated' })
}

userController.deleteUser = async (req, res) => {
    const user = await User.findByIdAndDelete(req.params.id)
    res.json({ status: 'deleted' })
}


module.exports = userController;
const pool = require('../config/config')

const userController = {}


userController.getUsers = async (req, res) => {
    const response = await pool.query('SELECT * FROM ejemplo');
    res.status(200).json(response.rows);
};

userController.createUser = async (req, res) => {
    const { name, surname } = req.body;
    const response = await pool.query('INSERT INTO ejemplo (name,surname) VALUES ($1, $2)', [name, surname]);
    res.json({
        message: 'User Added successfully',
        body: {
            user: { name, surname }
        }
    })
};

userController.getUser = async (req, res) => {
    const id = parseInt(req.params.id);
    const response = await pool.query('SELECT * FROM ejemplo WHERE id = $1', [id]);
    res.json(response.rows);
};

userController.editUser = async (req, res) => {
    const id = parseInt(req.params.id);
    const { name, surname } = req.body;
    const response = await pool.query('UPDATE ejemplo SET name = $1, surname = $2 WHERE id = $3',
        [name, surname, id]);
    res.json('se ha modificado');
};

userController.deleteUser = async (req, res) => {
    const id = parseInt(req.params.id);
    await pool.query('DELETE FROM ejemplo where id = $1',
        [id]);
    res.json(` ${id} se ha borrado`);
};

module.exports = userController;
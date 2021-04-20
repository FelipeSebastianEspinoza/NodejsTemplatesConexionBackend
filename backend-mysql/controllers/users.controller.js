const userController = {}

userController.getUsers = (req, res) => {
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM ejemplo', (err, users) => {
            if (err) {
                res.json(err);
            }
            res.send(users)
        });
    });
};

userController.createUser = (req, res) => {
    const data = req.body;
    console.log(req.body)
    req.getConnection((err, connection) => {
        const query = connection.query('INSERT INTO ejemplo set ?', data, (err, user) => {
            console.log(user)
            res.send(user)
        })
    })
};

userController.getUser = (req, res) => {
    const { id } = req.params;
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM ejemplo where id = ?', [id], (err, user) => {
            res.send(user)
        });
    });
};

userController.editUser = (req, res) => {
    const { id } = req.params;
    const newUser = req.body;
    req.getConnection((err, conn) => {
        conn.query('UPDATE ejemplo set ? where id = ?', [newUser, id], (err, rows) => {
            res.send(newUser)
        });
    });
};

userController.deleteUser = (req, res) => {
    const { id } = req.params;
    req.getConnection((err, connection) => {
        connection.query('DELETE FROM ejemplo WHERE id = ?', [id], (err, rows) => {
            res.redirect('/');
        });
    });
}

module.exports = userController;
const routes = require('express').Router();
var usersRoutes = require('./routes/users')

routes.use('/users', usersRoutes);



routes.get('/', (req, res) =>
    res.send('Hello World!')
)
routes.post('/test', (req, res) => {
    res.json({ body: req.body })

});

module.exports = routes;


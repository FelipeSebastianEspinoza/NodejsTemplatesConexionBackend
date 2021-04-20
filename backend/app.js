const express = require('express')
const app = express()
const port = process.env.PORT || 5000

var routes = require('./routes.js')

const morgan = require('morgan')//esto es para ver las peticiones, se puede quitar
app.use(morgan('dev'))//esto es para ver las peticiones, se puede quitar


app.use(express.json()) // usamos esto envez del body parser

app.use('/', routes);


app.listen(port, () => console.log(`Server running on localhost:${port}`))
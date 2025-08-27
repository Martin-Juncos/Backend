const express = require('express')
const mainRoutes = require('./routes/mainRoutes')
const cors = require('cors')

const app = express()

app.use(cors())

app.use(express.json())

app.use(mainRoutes)

module.exports = app
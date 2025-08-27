const {Router} = require('express')
const userRoutes = require('./userRoutes')
const productRoutes = require('./productRoutes')

const mainRoutes = Router()

mainRoutes.use('/user', userRoutes)
mainRoutes.use('/product', productRoutes)

module.exports = mainRoutes
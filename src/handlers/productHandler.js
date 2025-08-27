const {products} = require('../db/dataBase')

const getAllproductHandler = (req, res) => {
    const allproduct = products
    res.send(allproduct)
}

const getproductByIdHandler = (req, res) => {
    const {id} = req.params
    const productById = `Trae un producto con id: ${id}`
    res.send(productById)
}

const createproductHandler = (req, res) => {
    const {name, price} = req.body
    const newproduct = `El nuevo producto es ${name} y su precio es $ ${price}`
    res.send(newproduct)
}

const deleteproductHandler = (req, res) => {
    const {id} = req.params
    const deletedproduct = `Se elimino el producto con id ${id}`
    res.send(deletedproduct)
}

const updateproductHandler = (req, res) => {
    const {id} = req.params
    const {name, price} = req.body
    const updateproduct = `El producto con id ${id} cambio su nombre a ${name} y su precio es $ ${price} `
    res.send(updateproduct)
}


module.exports = {
    getAllproductHandler,
    getproductByIdHandler,
    createproductHandler,
    deleteproductHandler, 
    updateproductHandler
}
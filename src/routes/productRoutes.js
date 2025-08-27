const { Router } = require("express");
const { getAllproductHandler, getproductByIdHandler, createproductHandler, deleteproductHandler, updateproductHandler } = require("../handlers/productHandler");


const productRoutes = Router();

productRoutes.get("/", getAllproductHandler);
productRoutes.get("/:id", getproductByIdHandler);
productRoutes.post("/", createproductHandler);
productRoutes.delete("/:id", deleteproductHandler);
productRoutes.put('/:id', updateproductHandler)

module.exports = productRoutes;
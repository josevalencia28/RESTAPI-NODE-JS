//const { response } = require('express');
//const conexion = require('../../database/conexion');
const {ConsultarProducts, ConsultarProductsById, CreateProducts, DeleteProductsById,UpdateProducts} = require('../model/modeloProducts');


const getProducts = async (rq, res) => {
    const response = await ConsultarProducts();
    res.status(200).json(response.rows);
};

const getProductsById = async (req, res) => {
    const codigo = req.params.codigo;
    const response = await ConsultarProductsById(codigo);
    res.json(response.rows);
}

const createProducts = async (req, res) => {
  //  validatorHandler(createUsersSchemas, 'body')
    const { name, precio, fabricado,fecha_vencimiento} = req.body;
    const response = await CreateProducts(name, precio, fabricado,fecha_vencimiento);
    console.log(response);
        res.json({
            message: 'User added successfully',
            body: {
                user: { name, precio,fabricado, fecha_vencimiento}
            }
        })
};

const deleteProducts = async (req, res) => {
    const codigo  = req.params.codigo;
    const response = await DeleteProductsById(codigo);
   console.log(response);
    res.json(`User ${codigo} deleted successfully`);
};
    
const updateProducts = async (req, res) => {
    const codigo = req.params.codigo;
    const { name, precio, fabricado, fecha_vencimiento} = req.body;
    const response = await UpdateProducts(name, precio,fabricado, fecha_vencimiento, codigo);
  console.log(response);
    res.json({
        message: 'Userupdate successfully',
        body:{
            user: { name, precio, fabricado, fecha_vencimiento}
        }
    })
};

module.exports ={
    getProducts,
    getProductsById,
    createProducts,
    deleteProducts,
    updateProducts
}
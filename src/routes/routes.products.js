const { Router} = require('express');
const router = Router()

const { getProducts,createProducts,updateProducts,getProductsById,deleteProducts} = require('../controllers/controllers.products');

//Routes Products
router.get('/products', getProducts);
router.get('/products/:codigo',getProductsById);
router.post('/products', createProducts);
router.delete('/products/:codigo', deleteProducts);
router.patch('/products/:codigo', updateProducts);

module.exports = router;
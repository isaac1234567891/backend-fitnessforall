const express = require( 'express' );
const { getProducts, getProductsByElectronics } = require('../controllers/product.controller');
const router = express.Router();

/** Definir las rutas */

// http://localhost:3000/api/products/
router.get( '/', getProducts );

// http://localhost:3000/api/products/electronica
router.get( '/electronica', getProductsByElectronics );


module.exports = router;
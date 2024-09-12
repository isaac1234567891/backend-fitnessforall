const express = require( 'express' );
const router = express.Router();

const { getProducts, createProduct, updateProductPut, updateProductPatch, deleteProduct } = require('../controllers/product.controller');

/** Definir las rutas para la entidad producto
 * http://localhost:3000/api/products/
*/
router.get( '/', getProducts );             // Obtiene todos los productos
router.post( '/', createProduct  );         // Crear un producto
router.put( '/', updateProductPut );        // Actualiza todos los campos de un producto
router.patch( '/', updateProductPatch );    // Actualiza parcialmente los campos de un producto
router.delete( '/', deleteProduct );        // Elimina un producto


module.exports = router;
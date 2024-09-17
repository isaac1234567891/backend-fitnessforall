const express = require( 'express' );
const router = express.Router();

const { getProducts, createProduct, updateProductPut, updateProductPatch, deleteProduct, getProductById } = require('../controllers/product.controller');

/** Definir las rutas para la entidad producto
 * http://localhost:3000/api/products/
*/
router.get( '/', getProducts );             // Obtiene todos los productos
router.get( '/:id', getProductById );       // Obtiene un producto por su ID                            
router.post( '/', createProduct  );         // Crear un producto
// router.put( '/', updateProductPut );        // Actualiza todos los campos de un producto
router.patch( '/:id', updateProductPatch );    // Actualiza parcialmente los campos de un producto
router.delete( '/:id', deleteProduct );        // Elimina un producto


module.exports = router;
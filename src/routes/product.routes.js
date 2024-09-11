const express = require( 'express' );
const router = express.Router();

/** Definir las rutas */

// http://localhost:3000/api/products/
router.get( '/', function( req, res ) {
    res.send( '<p>Lista de todos los productos</>')
});

// http://localhost:3000/api/products/electronica
router.get( '/electronica', function( req, res ) {
    res.send( '<p>Lista de productos electronicos</p>' );
});


module.exports = router;
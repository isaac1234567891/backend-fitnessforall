const express = require( 'express' );
const app = express();

/** EndPoints de nuestro servidor */

// http://localhost:3000/api/products
app.use( '/api/products', require( './routes/product.routes' ) );


/** Lanzamos el servidor en puerto indicado 
 * http://localhost:3000
*/
app.listen( 3000, function() {
    console.log( 'Servidor corriendo en puerto 3000' );
});
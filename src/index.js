const express = require( 'express' );
const app = express();

/** EndPoints de nuestro servidor */

// http://localhost:3000/
app.get( '/', ( req, res ) => {
    res.send( '<h1>Home</h1>' );
});

// http://localhost:3000/about-us
app.get( '/about-us', function( req, res ) {
    res.send( '<h1>Sobre nosotros<h1/>' )
});

// http://localhost:3000/services
app.get( '/services', function( req, res ) {
    res.send( '<h1>Nuestros Servicios</h1>' )
});


/** Lanzamos el servidor en puerto indicado 
 * http://localhost:3000
*/
app.listen( 3000, function() {
    console.log( 'Servidor corriendo en puerto 3000' );
});
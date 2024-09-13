const express = require( 'express' );
const app = express();

const dbConection = require( './config/mongo.config' );

/** Establecer la conexion a MongoDB usando la configuracion */
dbConection();

/** MIDDLEWARE: */
app.use( express.json() );              // Middleware: Permite manejar JSON en las solicitudes

/** EndPoints de nuestro servidor */
app.use( '/api/products', require( './routes/product.routes' ) );   // Middleware: Activa solicitudes que comienzan con el prefijo /api/products


/** Lanzamos el servidor en puerto indicado 
 * http://localhost:3000
*/
app.listen( 3000, function() {
    console.log( 'Servidor corriendo en puerto 3000' );
});
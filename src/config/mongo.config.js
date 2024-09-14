const mongoose = require( 'mongoose' );

/** Configuracion para conectar MongoDC usando la dependencia Mongoose */
async function dbConection() {
    // try-catch: Se usa para manejar excepciones
    try {
        await mongoose.connect( 'mongodb://localhost:27017/db_shop', {} );      // Conectamos a la base de datos y retorna promesa
        console.log( 'Base de datos inicializada correctamente' );
    } 
    catch ( error ) {
        console.error( error );
        // throw new Error( 'Error al inicializar la base datos' );
    }
    
}


module.exports = dbConection;       // Exportando la configuracion
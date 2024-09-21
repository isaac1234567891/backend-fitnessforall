const jwt = require( 'jsonwebtoken' );


function generateToken ( payload ) {
    return jwt.sign( 
        payload,                    // Payload (Carga Util)
        'sevrp9ml975nykxe;oidf',    // Seed: Palabra Secreta (Semilla) 
        { expiresIn: '1h' }         // Configuracion (Expiracion del Token)
    );
}


module.exports = {
    generateToken
};
const UserModel = require("../models/User.model");
const { dbGetUserByUsername, dbRegisterUser } = require("../services/auth.service");

async function register( req, res ) {
    // Paso 1: Obtener los datos a registrar (usuario)
    const inputData = req.body;
    
    // Paso 2: Verificar si el usuario existe BD  ---> email
    const userFound = await dbGetUserByUsername( inputData.username );

    if( userFound ) {
        return res.json({
            ok: false,
            msg: 'El usuario ya existe.'
        });
    }

    // Paso 3: Registrar usuario (No existe)
    const data =  await dbRegisterUser( inputData );
    console.log( data );
    
    // Paso Opcional: Generar las credenciales (Token) y esto autenticara al usuario

    // Paso 4: Responder al cliente, si el usuario a sido registrado
    res.json({
        ok: true,
        data
    });
}

function login( req, res ) {
    res.json({
        ok: true,
        msg: 'Autentica un usuario'
    });
}

function reNewToken( req, res ) {
    res.json({
        ok: true,
        msg: 'Renueva las credenciales (Token)'
    });
}


module.exports = {
    register,
    login,
    reNewToken
};
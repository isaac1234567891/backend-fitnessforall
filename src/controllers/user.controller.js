const { dbGetUser, dbInsertUser, dbUpdateUser, dbDeleteUser } = require("../services/user.services");

async function getUser(req,res) {
    try {
        const data = await dbGetUser();

        res.status( 200 ).json({
            ok: true,
            data
        });    
    } 
    catch ( error ) {
        console.error( error );
        res.status( 500 ).json({
            ok: false,
            msg: 'Error al obtner la lista de toda la informacion de los usuarios'
        });
    }
}

async function createuser( req, res ) {

    const inputData = req.body;
    console.log( inputData );       // Testing


    try {
        const data = await dbInsertUser( inputData );
        console.log( data );            // Testing
        res.status( 201 ).json({
            ok: true,
            data           // ECMAScript data: data ---> data
        });        
    } 
    catch ( error ) {
        console.error( error );
        res.status( 500 ).json({
            ok: false,
            msg: 'Error al crear la informacion del usuario'
        })
    }

}

async function updateUser( req, res ) {
    const UserInfotId = req.params.id;
    const inputData = req.body;

    try {
        const data = await dbUpdateUser( UserInfotId, inputData );

        res.status( 200 ).json({
            ok: true,
            data
        });    
    } 
    catch ( error ) {
        console.error( error );
        res.status( 500 ).json({
            ok: false,
            msg: 'Error al actualizar usuario'
        })   
    }
}

async function deleteUser( req, res ) {
    const productId = req.params.id;
    /** ! TODO: Validar cuando no encuentra un producto y responder al usuario */

    try {
        const data = await dbDeleteUser( productId );

        res.status( 200 ).json({
            ok: true,
            data
        });    
    } 
    catch ( error ) {
        console.error( error );
        res.status( 500 ).json({
            ok: false,
            msg: 'Error al eliminar un producto por ID'
        })
    }

    
}


module.exports = {createuser, getUser, updateUser, deleteUser};
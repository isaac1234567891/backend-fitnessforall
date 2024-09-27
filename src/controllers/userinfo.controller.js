
const { dbInsertUserInfo } = require('../services/userinfo.service');

async function createuserinfo( req, res ) {

    const inputData = req.body;
    console.log( inputData );       // Testing


    try {
        const data = await dbInsertUserInfo( inputData );
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

module.exports = createuserinfo;
const { dbInsertProduct } = require('../services/product.service');


// Muestra todos los productos registrados
function getProducts( req, res ) {
    res.json({
        ok: true,
        msg: 'Obtener todos los productos'
    });
}

async function createProduct( req, res ) {
    const inputData = req.body;
    console.log( inputData );       // Testing

    try {
        const data = await dbInsertProduct( inputData );
        console.log( data );            // Testing
    
        res.json({
            ok: true,
            msg: 'Crea un producto',
            data            // ECMAScript data: data ---> data
        });        
    } 
    catch ( error ) {
        console.error( error );
        res.json({
            ok: false,
            msg: 'Error al crear un producto'
        })
    }


}

function updateProductPut( req, res ) {
    res.json({
        ok: true,
        msg: 'Actualiza todos los campos del producto'
    });
}

function updateProductPatch( req, res ) {
    res.json({
        ok: true,
        msg: 'Actualiza parcialmente los campos del producto'
    });
}

function deleteProduct( req, res ) {
    res.json({
        ok: true,
        msg: 'Elimina un producto'
    });
}


module.exports = {
    getProducts,
    createProduct,
    updateProductPut,
    updateProductPatch,
    deleteProduct
}
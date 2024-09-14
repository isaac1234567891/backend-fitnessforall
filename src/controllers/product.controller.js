const { dbInsertProduct, dbGetProducts, dbGetProductById, dbDeleteProduct } = require('../services/product.service');


// Muestra todos los productos registrados
async function getProducts( req, res ) {
    /** ! TODO: Obtener los productos paginados */
    try {
        const data = await dbGetProducts();

        res.json({
            ok: true,
            data
        });    
    } 
    catch ( error ) {
        console.error( error );
        res.json({
            ok: false,
            msg: 'Error al obtener todos los productos'
        });
    }
}

async function getProductById( req, res ) {
    const productId = req.params.id;

    try {
        const data = await dbGetProductById( productId );

        res.json({
            ok: true,
            data
        });
    } 
    catch ( error ) {
        console.error( error );
        res.json({
            ok: false,
            msg: 'Error al obtener un producto por ID'
        })  
    }

}

async function createProduct( req, res ) {
    const inputData = req.body;
    console.log( inputData );       // Testing

    try {
        const data = await dbInsertProduct( inputData );
        console.log( data );            // Testing
    
        res.json({
            ok: true,
            data           // ECMAScript data: data ---> data
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

async function deleteProduct( req, res ) {
    const productId = req.params.id;
    /** ! TODO: Validar cuando no encuentra un producto y responder al usuario */

    try {
        const data = await dbDeleteProduct( productId );

        res.json({
            ok: true,
            data
        });    
    } 
    catch ( error ) {
        console.error( error );
        res.json({
            ok: false,
            msg: 'Error al eliminar un producto por ID'
        })
    }

    
}


module.exports = {
    getProducts,
    getProductById,
    createProduct,
    updateProductPut,
    updateProductPatch,
    deleteProduct
}
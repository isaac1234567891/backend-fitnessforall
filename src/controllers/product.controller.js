// Muestra todos los productos registrados
function getProducts( req, res ) {
    res.json({
        ok: true,
        msg: 'Obtener todos los productos'
    });
}

function createProduct( req, res ) {
    res.json({
        ok: true,
        msg: 'Crea un producto'
    });
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
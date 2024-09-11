function getProducts( req, res ) {
    res.json({
        ok: true,
        msg: 'Obtiene el listado de productos'
    });
}

const getProductsByElectronics = ( req, res ) => {
    res.json({
        ok: true,
        msg: 'Obtiene el listado de productos por categoria (electronica)'
    });
}


module.exports = {
    getProducts,
    getProductsByElectronics
};
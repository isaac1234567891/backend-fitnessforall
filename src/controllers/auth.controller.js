function register( req, res ) {
    res.json({
        ok: true,
        msg: 'Registra un usuario'
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
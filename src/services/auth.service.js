const UserModel = require("../models/User.model");

const dbGetUserByUsername = async ( email ) => {
    return await UserModel.findOne({ username: email });
}

const dbRegisterUser = async ( newUser ) => {
    const dbUser = new UserModel( newUser );  // Prepara los datos en JSON para registrar en MongoDB 

    dbUser.password = 'nuevo-password';

    return await dbUser.save();   // Guarda en la base de datos y devuelve el usuario registrado
}


module.exports = {
    dbGetUserByUsername,
    dbRegisterUser
}
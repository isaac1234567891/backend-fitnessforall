/** El Archivo de Servicio tiene la responsabilidad unica de hacer consultas a la base de datos */

const ProductModel = require("../models/Product.model");

const dbGetProducts = async () => {
    return await ProductModel.find();
}

const dbGetProductById = async ( _id ) => {
    return await ProductModel.findOne({ _id });
}

const dbInsertProduct = async ( newProduct ) => {
    return await ProductModel.create( newProduct );
}

const dbDeleteProduct = async ( id ) => {
    return await ProductModel.findByIdAndDelete( id );
}


module.exports = {
    dbGetProducts,
    dbGetProductById,
    dbInsertProduct,
    dbDeleteProduct
};
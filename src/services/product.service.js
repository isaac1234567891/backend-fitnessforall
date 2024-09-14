/** El Archivo de Servicio tiene la responsabilidad unica de hacer consultas a la base de datos */

const ProductModel = require("../models/Product.model");

const dbInsertProduct = async ( newProduct ) => {
    return await ProductModel.create( newProduct );
}


module.exports = {
    dbInsertProduct
};
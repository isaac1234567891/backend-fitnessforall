const {Schema,model} = require( 'mongoose' );

const CategorySchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required:true
    }
},{
    timestamps:true
})

const CategoryModel = model('categories',CategorySchema)

module.exports = UserModel;
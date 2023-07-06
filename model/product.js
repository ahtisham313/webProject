import mongoose from "mongoose";

const productStructure=mongoose.Schema({
    id: {
        type: Number,
        required: true,
      },
      // image: {
      //   type: String,
      //   required: true,
      // },
      name: {
        type: String,
        required: true,
      },
      description: {
        type: String,
        default: '',
      },
      price: {
        type: String,
        required: true,
      },String
})

const productModel=mongoose.model('product',productStructure);
export default productModel;
























// import mongoose from 'mongoose';

// const productStructure = mongoose.Schema({
//   id: String,
//   name: String,
//   price: Number,
//   image: String,
//   allImages: [String],
//   description: String,
//   category: String,
//   quantity: Number,
//   rating: Number,
//   featured: Boolean,
//   sale: Boolean,
// });

// const ProductModel = mongoose.model('Product', productStructure);

// export default ProductModel;
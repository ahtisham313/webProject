import mongoose from 'mongoose';

const productStructure = mongoose.Schema({
  id: String,
  name: String,
  price: Number,
  image: String,
  allImages: [String],
  description: String,
  category: String,
  quantity: Number,
  rating: Number,
  featured: Boolean,
  sale: Boolean,
});

const ProductModel = mongoose.model('Product', productStructure);

export default ProductModel;
import express from 'express'
import { createProduct } from '../controller/product.js'
const products = express.Router();

products.post('/', createProduct);

export default products;









// import express from 'express';
// import { getProducts, createProduct } from '../controllers/product.js';
// const router = express.Router();

// router.get('/', getProducts);

// router.post('/', createProduct);

// export default router;
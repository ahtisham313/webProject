import productModel from "../model/product.js";

export const createProduct = async (req, res) =>{
    const product = req.body;

    const newProduct = new productModel(product);
    try {
      await newProduct.save();
      res.json(newProduct);
    } catch (error) {
      console.log("not saved...");
    }

}
















// import express from 'express';
// import ProductModel from '../models/product.js';
// export const createProduct = async (req, res) => {
//   const product = req.body;
//   const newProduct = new ProductModel(product);

//   try {
//     await newProduct.save();
//     res.status(201).json(newProduct);
//     console.log('Product added successfully');
//   } catch (error) {
//     res.status(409).json({ message: error.message });
//   }
// };

// export const getProducts = async (req, res) => {
//   try {
//     const product = await ProductModel.find();
//     res.status(200).json(product);
//   } catch (error) {
//     res.status(404).json({ message: error.message });
//   }
// };
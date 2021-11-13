import { RequestHandler } from "express";
import mongoose from "mongoose";
import Product from "../models/product";
import { ProductInterface } from "../interface/products";

const create: RequestHandler = async ({body},res) => {
        const data: ProductInterface = body;

        const product = new Product({
        _id: new mongoose.Types.ObjectId(),
        name: data.name,
        price: data.price,
        });

        try {
        const { _id, name, price } = await product.save();

        const response = {
            message: "Product created",
            product: { _id, name, price },
        };

        res.status(201).json(response);
        } catch (error) {
        res.status(500).json(error);
        }
}

const getAll: RequestHandler = async (req, res) => {
    try {
      const result = await Product.find().exec();
  
      const response = {
        count: result.length,
        products: result.map(({ _id, name, price }) => ({
          _id,
          name,
          price,
        })),
      };
  
      res.status(200).json(response);
    } catch (error) {
      res.status(500).json(error);
    }
  };


const getOne: RequestHandler = async ({params},res) => {
  const { productId } = params;

  try {
    const result = await Product.findById(productId)
      .select("_id name price image")
      .exec();

    if (result) {
      res.status(200).json(result);
    } else {
      res.status(404).json({ message: "Product not found" });
    }
  } catch (error) {
    res.status(500).json(error);
  }
}


const update: RequestHandler = async ({body, params},res) => {}
const destroy: RequestHandler = async ({query},res) => {}

export default { create, getAll, getOne, update, destroy };
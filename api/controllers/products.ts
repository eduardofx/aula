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



const getAll: RequestHandler = async (req,res) => {}
const getOne: RequestHandler = async (req,res) => {}
const update: RequestHandler = async ({body, params},res) => {}
const destroy: RequestHandler = async ({query},res) => {}

export default { create, getAll, getOne, update, destroy };
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const product_1 = __importDefault(require("../models/product"));
const create = async ({ body }, res) => {
    const data = body;
    const product = new product_1.default({
        _id: new mongoose_1.default.Types.ObjectId(),
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
    }
    catch (error) {
        res.status(500).json(error);
    }
};
const getAll = async (req, res) => {
    try {
        const result = await product_1.default.find().exec();
        const response = {
            count: result.length,
            products: result.map(({ _id, name, price }) => ({
                _id,
                name,
                price,
            })),
        };
        res.status(200).json(response);
    }
    catch (error) {
        res.status(500).json(error);
    }
};
const getOne = async ({ params }, res) => {
    const { productId } = params;
    try {
        const result = await product_1.default.findById(productId)
            .select("_id name price image")
            .exec();
        if (result) {
            res.status(200).json(result);
        }
        else {
            res.status(404).json({ message: "Product not found" });
        }
    }
    catch (error) {
        res.status(500).json(error);
    }
};
const update = async ({ body, params }, res) => { };
const destroy = async ({ query }, res) => { };
exports.default = { create, getAll, getOne, update, destroy };

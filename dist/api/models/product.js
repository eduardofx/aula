"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const ProductSchema = new mongoose_1.Schema({
    _id: mongoose_1.Schema.Types.ObjectId,
    name: { type: String, required: true },
    price: { type: Number, required: true },
});
exports.default = (0, mongoose_1.model)('Product', ProductSchema);

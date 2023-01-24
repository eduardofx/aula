"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const regex_1 = require("../utils/regex");
const UserSchema = new mongoose_1.Schema({
    _id: mongoose_1.Schema.Types.ObjectId,
    email: {
        type: String,
        required: true,
        unique: true,
        match: regex_1.validateEmail,
    },
    password: { type: String, required: true },
});
exports.default = (0, mongoose_1.model)('User', UserSchema);

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const users_1 = __importDefault(require("./users"));
const products_1 = __importDefault(require("./products"));
const router = (app) => {
    app.use("/users", users_1.default);
    app.use("/products", products_1.default);
};
exports.default = router;

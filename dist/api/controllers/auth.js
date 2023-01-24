"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const checkAuth = ({ headers }, res, next) => {
    var _a;
    try {
        const accessToken = (_a = headers.authorization) !== null && _a !== void 0 ? _a : '';
        jsonwebtoken_1.default.verify(accessToken, 'secret');
        next();
    }
    catch (error) {
        res.status(401).json({ message: 'Verifique a Autenticação' });
    }
};
exports.default = {
    checkAuth,
};

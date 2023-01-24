"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const mongoose_1 = __importDefault(require("mongoose"));
const user_1 = __importDefault(require("../models/user"));
const signUp = async ({ body }, res) => {
    const user = await user_1.default.findOne({ email: body.email }).exec();
    if (user) {
        res.status(422).json({ message: 'Já existe um email cadastrado' });
    }
    else {
        bcrypt_1.default.hash(body.password, 10, async (err, hash) => {
            if (err) {
                res.status(500).json(err);
            }
            else {
                const newUser = new user_1.default({
                    _id: new mongoose_1.default.Types.ObjectId(),
                    email: body.email,
                    password: hash,
                });
                try {
                    const { _id, email, password } = await newUser.save();
                    const response = {
                        message: 'User created',
                        user: { _id, email, password },
                    };
                    res.status(201).json(response);
                }
                catch (error) {
                    res.status(500).json(error);
                }
            }
        });
    }
};
const signIn = async ({ body }, res) => {
    const user = await user_1.default.findOne({ email: body.email }).exec();
    if (!user) {
        res.status(401).json({ message: 'Auth failed' });
    }
    else {
        bcrypt_1.default.compare(body.password, user.password, (err, same) => {
            if (err) {
                res.status(500).json(err);
            }
            if (same) {
                const token = jsonwebtoken_1.default.sign({ email: user.email, userId: user._id }, 'secret', { expiresIn: '4h' });
                res
                    .status(201)
                    .set({ 'access-token': token, 'token-type': 'Bearer' })
                    .json({ token });
            }
            else {
                res.status(401).json({ message: 'Ocorreu um erro' });
            }
        });
    }
};
exports.default = { signUp, signIn };

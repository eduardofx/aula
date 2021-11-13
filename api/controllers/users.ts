import bcrypt from 'bcrypt';
import { RequestHandler } from 'express';
import jwt from 'jsonwebtoken';
import mongoose from 'mongoose';
import User from '../models/user';


const signUp: RequestHandler = async ({ body }, res) => {
    const user = await User.findOne({ email: body.email }).exec();

    if (user) {
        res.status(422).json({ message: 'Já existe um email cadastrado' });
      } else{
        bcrypt.hash(body.password, 10, async (err, hash) => {
            if (err) {
                res.status(500).json(err);
              } else {
                const newUser = new User({
                  _id: new mongoose.Types.ObjectId(),
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
                } catch (error) {
                  res.status(500).json(error);
                }

              }
        })
    }
}


export default {signUp}
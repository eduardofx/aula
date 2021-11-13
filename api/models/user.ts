import { Document, model, Model, Schema } from 'mongoose';
import { validateEmail } from '../utils/regex';

interface UserModel extends Document {
  email: string;
  password: string;
}

const UserSchema: Schema = new Schema({
  _id: Schema.Types.ObjectId,
  email: {
    type: String,
    required: true,
    unique: true,
    match: validateEmail,
  },
  password: { type: String, required: true },
});

const User: Model<UserModel> = model('User', UserSchema);
export default User;

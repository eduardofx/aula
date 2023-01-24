import { Document, model, Model, Schema } from 'mongoose';

interface ProductModel extends Document {
  name: string;
  price: number;
}

const ProductSchema: Schema = new Schema({
  _id: Schema.Types.ObjectId,
  name: { type: String, required: true },
  price: { type: Number, required: true },
});

export default model<ProductModel>('Product', ProductSchema);
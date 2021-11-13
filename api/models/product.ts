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

const Product: Model<ProductModel> = model('Product', ProductSchema);

export default Product;

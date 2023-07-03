import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
  productName: {
    type: String,
     required:true,
  },
  slug: {
    type: String,
  
  },
  description: {
    type: String,
    required:true,
  },
  category: {
    type: mongoose.ObjectId,
    ref:"Category",
    required:true,
  },
  quantity:{
    type:Number,
    required:true
  },
  price: {
    type: Number,
    required:true,
  },

  photo:{
    data:Buffer,
    contentType:String,
  
  },
  shipping:{
    type:Boolean,
   

  }
},{timestamps:true});

const ProductModel = mongoose.model("products", ProductSchema);
export default ProductModel;

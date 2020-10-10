const mongoose = require("mongoose");
const {ObjectId} = mongoose.Schema.Types
const PostSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  body: {
    type: String,
    required: true,
  },
  photo: {
    type: String,
   default:'no photo'
  },
  postBy:{
      type:ObjectId,
      ref:'User' 
  }
}); 

mongoose.model('Posts' , PostSchema)
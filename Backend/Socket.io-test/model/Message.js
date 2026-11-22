import mongoose from "mongoose";
const { Schema, model } = mongoose;

const message = new Schema({
  sender: { type: String, required: true },
  text: { type: String, default: '' },
  attachment: {
    url: String,
    mimeType: String,
  },
},
  {
    timestamp: true,
  }
);

const Message = model('Message', message);
export default Message;

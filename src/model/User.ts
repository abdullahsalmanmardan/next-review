import mongoose, { Schema, Document } from "mongoose";

export interface Message extends Document {
  content: string;
  createdAt: Date;
}

const messageSchema: Schema<Message> = new Schema({
  content: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

export interface User extends Document {
  username: string;
  email: string;
  password: string;
  verifyCode: string;
  verifyCodeExpiry: Date;
  isVerified: boolean;
  isAcceptingMessage: boolean;
  messages: Message[];
}

const userSchema: Schema<User> = new Schema({
  username: { type: String, required: [true, "username is required"], unique: true},
  email: { type: String, required: [true, "email is required"], unique: true },
  password: { type: String, required: true },
  verifyCode: { type: String, required: true },
  isVerified: {type: Boolean, default:false},
  isAcceptingMessage: { type: Boolean, default:true },
  verifyCodeExpiry: { type: Date, default: Date.now },
  messages: [messageSchema],
});

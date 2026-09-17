import mongoose, { Schema, models, model } from "mongoose";

export interface IMessage {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
  createdAt: Date;
}

const MessageSchema = new Schema<IMessage>({
  firstName: { type: String, required: true, trim: true, maxlength: 80 },
  lastName: { type: String, required: true, trim: true, maxlength: 80 },
  email: { type: String, required: true, trim: true, maxlength: 200 },
  message: { type: String, required: true, trim: true, maxlength: 4000 },
  createdAt: { type: Date, default: Date.now },
});

export const Message =
  (models.Message as mongoose.Model<IMessage>) || model<IMessage>("Message", MessageSchema);

import { DateTime } from "luxon";
import mongoose, { Document, Schema } from "mongoose";

interface IMessage {
  text: string;
  user: string;
  date: string;
}

interface IMessageModel extends IMessage, Document {}

const MessageSchema = new Schema(
  {
    text: { type: String, required: true },
    user: { type: String, required: true },
  },
  { timestamps: true }
);

MessageSchema.virtual("date").get(function () {
  return DateTime.fromJSDate(this.createdAt).toLocaleString(
    DateTime.DATE_MED
  );
});

export const MessageModel = mongoose.model<IMessageModel>(
  "Message",
  MessageSchema
);

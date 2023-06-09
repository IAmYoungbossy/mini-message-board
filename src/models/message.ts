import { DateTime } from "luxon";
import mongoose, { Document, Schema } from "mongoose";

export interface IMessage {
  ID: string;
  text: string;
  user: string;
  date: string;
  updated: string;
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
    DateTime.DATETIME_FULL
  );
});

MessageSchema.virtual("ID").get(function () {
  return this._id;
});

MessageSchema.virtual("updated").get(function () {
  return DateTime.fromJSDate(this.updatedAt).toLocaleString(
    DateTime.DATETIME_FULL
  );
});

export const MessageModel = mongoose.model<IMessageModel>(
  "Message",
  MessageSchema
);

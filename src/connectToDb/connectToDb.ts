import http from "http";
import mongoose from "mongoose";
import { CustomError } from "../bin/www";

// This is set to false to enable use of virtual properties
mongoose.set("strictQuery", false);

// Define the database URL to connect to.
const mongoDB = "mongodb://127.0.0.1:27017/mssg-board";

interface IConnectToDb {
  onListening: () => void;
  server: http.Server<
    typeof http.IncomingMessage,
    typeof http.ServerResponse
  >;
  port: string | number | false;
  onError: (error: CustomError) => void;
}

// Connects to db and listens for request if succesfull
export default async function conectToDb({
  port,
  server,
  onError,
  onListening,
}: IConnectToDb) {
  try {
    // Connects to MongoDB db
    await mongoose.connect(mongoDB);

    // Listen on provided port, on all network interfaces.
    server.listen(port, () =>
      console.log("Listening for request")
    );
    server.on("error", onError);
    server.on("listening", onListening);

    // Logs connection success
    console.log("Connected to MongoDb");
  } catch (err) {
    // Logs connection failure
    console.log("Failed to connect");
  }
}

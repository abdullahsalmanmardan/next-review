import mongoose from "mongoose";

type ConnectionObject = {
  isConnected?: number;
};

const connection: ConnectionObject = {};

async function dbConnect(): Promise<void> {
  if (connection.isConnected) {
    console.log("already connected");
    return;
  }

  try {
    const db = await mongoose.connect(process.env.MONGODB_URI!, {});

    console.log("Connected to MongoDB");
    connection.isConnected = db.connections[0].readyState;
  } catch (error) {
    console.error("Failed to connect to MongoDB", error);
    process.exit(1);
  }
}

export default dbConnect;

// 3. all time ni chalti, continue ni chalti, jab request ati ha tab hi chalti ha bus.
//    database connection is not connnected all time,
//    bar request pe dobara db connect hoti

// check if db connected if not then connect else use it .

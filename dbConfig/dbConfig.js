import mongoose from "mongoose";
export async function connect() {
  try {
    mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
    });
    mongoose.set("strictQuery", false);
    const connection = mongoose.connection;
    connection.on("connected", () => {
      console.log("Mongo Db Connected successfully");
    });
    connection.on("error", (err) => {
      console.log(
        "MongoDB connected error. Please make sure MongoDb connection error. Please make sure MongoDb is running ",
        err
      );
      process.exit();
    });
  } catch (error) {
    console.log(error);
  }
}

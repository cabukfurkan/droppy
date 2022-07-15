import mongoose from "mongoose";

const connectDB = () => {
  const connectionParams = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  };
  try {
    mongoose.connect(process.env.MONGODB_URL, connectionParams);
    console.log("Connected to database");
  } catch (error) {
    console.log(error);
    console.log("Connection Failed");
  }
};

export default connectDB;

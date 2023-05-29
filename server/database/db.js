import mongoose from "mongoose";

export const Connection = async () => {
  const MONGODB_URI = `mongodb+srv://sevantika:sev123@cluster0.mnm2ohd.mongodb.net/?retryWrites=true&w=majority`;
  try {
    await mongoose.connect(MONGODB_URI, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    console.log("MomgoDB Connected");
  } catch (error) {
    console.log("Can't connect to DB", error);
  }
};

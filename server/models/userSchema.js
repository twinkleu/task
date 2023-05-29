import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  username: String,
});

const taskuser = mongoose.model("taskuser", userSchema);

export default taskuser;

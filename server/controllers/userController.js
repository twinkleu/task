import User from "../models/userSchema.js";

export const addUser = async (request, response) => {
  const user = request.body;
  const validateUser = new User(user);

  try {
    await validateUser.save();
    response.status(200).json(validateUser);
  } catch (error) {
    response.status(500).json({ message: error.message });
  }
};

export const getUsers = async (request, response) => {
  try {
    const users = await User.find({});
    response.status(200).json(users);
  } catch (error) {
    response.status(500).json({ message: error.message });
  }
};

export const getUser = async (request, response) => {
  try {
    const user = await User.findById(request.params.id);

    response.status(200).json(user);
  } catch (error) {
    response.status(500).json({ message: error.message });
  }
};

export const editUser = async (request, response) => {
  let user = request.body;
  const editUser = new User(user);
  try {
    await User.updateOne({ _id: request.params.id }, editUser);

    response.status(200).json(editUser);
  } catch (error) {
    response.status(500).json({ message: error.message });
  }
};

export const deleteUser = async (request, response) => {
  try {
    await User.deleteOne({ _id: request.params.id });

    response.status(200).json({ message: "User get sucessfully deleted" });
  } catch (error) {
    response.status(500).json({ message: error.message });
  }
};

const User = require("../models/user-model");
const Contact = require("../models/contact-model");

const getAllUsers = async (req, res, next) => {
  try {
    const users = await User.find({}, { password: 0 });

    if (!users || users.length === 0) {
      return res.status(404).json({ message: "Users not found!" });
    }

    return res.status(200).json(users);
  } catch (error) {
    next(error);
  }
};

const getUserById = async (req, res, next) => {
  try {
    const id = req.params.id;
    const user = await User.find({ _id: id }, { password: 0 });

    if (!user) {
      return res.status(404).json({ message: "User not found!" });
    }

    return res.status(200).json(user);
  } catch (error) {
    next(error);
  }
};

const getAllContacts = async (req, res, next) => {
  try {
    const contacts = await Contact.find();

    if (!contacts || contacts.length === 0) {
      return res.status(404).json({ message: "Contacts not found!" });
    }

    return res.status(200).json(contacts);
  } catch (error) {
    next(error);
  }
};

const deleteUserById = async (req, res, next) => {
  try {
    const id = req.params.id;

    await User.deleteOne({ _id: id });

    return res.status(200).json({ message: "User Deleted Successfully!" });
  } catch (error) {
    next(error);
  }
};

const deleteContactById = async (req,res,next)=>{
  try {
    const id = req.params.id;

    await Contact.deleteOne({ _id: id });

    return res.status(200).json({ message: "Contact Deleted Successfully!" });
  } catch (error) {
    next(error);
  }
}

const updateUserById = async (req, res, next) => {
  try {
    const id = req.params.id;

    const updatedData = await User.updateOne({ _id: id }, { $set: req.body });

    return res.status(200).json(updatedData);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllUsers,
  getAllContacts,
  deleteUserById,
  getUserById,
  updateUserById,
  deleteContactById
};

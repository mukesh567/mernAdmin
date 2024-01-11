const User = require("../models/user-model");

//Home page
const home = async (req, resp) => {
  try {
    resp.status(200).json({ message: "Home page!" });
  } catch (error) {
    resp.status(500).json("Internal server error!");
  }
};

//Registration page
const register = async (req, resp) => {
  try {
    const { username, email, phone, password } = req.body;

    const userExist = await User.findOne({ email });

    if (userExist) {
      return resp.status(400).json({ message: "Email Already exists!" });
    }

    const userCreated = await User.create({
      username,
      email,
      phone,
      password,
    });

    resp.status(201).json({
      message: userCreated,
      token: await userCreated.generateToken(),
      userId: userCreated._id.toString(),
    });
  } catch (error) {
    resp.status(500).json("Internal server error!");
  }
};

//Login page
const login = async (req, resp) => {
  try {
    const { email, password } = req.body;

    const userExist = await User.findOne({ email });

    if (!userExist) {
      return resp.status(400).json({ message : "Invalid creadentials" });
    }

    //Compare password => through the instance methods from models
    const user = await userExist.comparePassword(password);

    if (user) {
      resp.status(200).json({
        message: "Login successfully",
        token: await userExist.generateToken(),
        userId: userExist._id.toString(),
      });
    } else {
      resp.status(401).json({ message: "Invalid email or password!" });
    }
  } catch (error) {
    resp.status(500).json("Internal server error!");
  }
};

//Get user data
const user = async (req, resp) => {
  try {
    const userData = req.user;
    return resp.status(200).json({  userData });
    
  } catch (error) {
    console.log(`Error in user route , ${error}`);
  }
};

module.exports = { home, register, login, user };

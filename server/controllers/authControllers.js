const User = require("../models/userModel");
const asyncHandler = require("express-async-handler");

const login = asyncHandler(async (req, res) => {
  console.log(req.body);
  const { email, password } = req.body;

  if ((!email, !password))
    throw new Error("please provide a email and password");

  //   check if user exists or no
  const user = await User.findOne({ email });
  if (!user) throw new Error("Invalide credentials");

  // check if the password match
  const passwordMatch = await user.comparePassword(password);
  if (!passwordMatch) throw new Error("Wronge Password");

  const token = await user.createJWT();

  res.json({
    success: true,
    token,
    displayName: user.displayName,
    id: user._id,
  });
});

const register = asyncHandler(async (req, res) => {
  const { displayName, email, password, isAdmin } = req.body;
  const newUser = await User.create({
    displayName,
    email,
    password,
    isAdmin,
  });
  const token = await newUser.createJWT();
  res.status(201).json({ success: true, token });
});

module.exports = { login, register };

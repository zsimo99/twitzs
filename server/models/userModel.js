const { model, Schema } = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const userSchema = new Schema({
  email: {
    type: String,
    required: [true, "Please enter your email"],
    unique: [true, "this email already exists"],
    match: [
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      "please provide a valide email",
    ],
  },
  displayName: {
    type: String,
    required: [true, "Please enter a dispaly name"],
    unique: [true, "already in use"],
  },
  password: {
    type: String,
    required: [true, "Please enter your password "],
    minlength: [6, "Your password is week"],
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
});

userSchema.pre("save", async function (next) {
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

userSchema.methods.comparePassword = async function (password) {
  const isMatch = await bcrypt.compare(password, this.password);
  return isMatch;
};

userSchema.methods.createJWT = async function () {
  return jwt.sign(
    { userId: this._id, name: this.displayName, email: this.email },
    process.env.JWT_SECRET,
    { expiresIn: process.env.JWT_LIFETIME }
  );
};

module.exports = model("User", userSchema);

const mongoose = require("mongoose")
const bcrypt = require('bcrypt');
const {isEmail} = require('validator')

const userSchema = new mongoose.Schema({
  username: { type: String, unique: true, required: true },
  email: { type: String, validate: isEmail, unique: true, require: true },
  password: { type: String, unique: true },
  confirmpassword: {type: String, require: true},
  status: {type: String, default:'online'}
});

userSchema.pre('save', async function (next){
  try {
    if (!this.isModified('password')){
      return next();
    }
    // Ensure that confirm password and password are same
    if (this.password != this.confirmpassword){
      throw new Error("Password and confirm password do not match.");
    }


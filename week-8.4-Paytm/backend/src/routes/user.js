const express = require("express");
const zod = require("zod");
const { signupBody, signIn } = require("../models/zod-validation-models");
const { JWT_SECRET } = require("../config/config");
const userRouter = express.Router();
const jwt = require("jsonwebtoken");
const { User } = require("../db/user");

userRouter.post("/signup", async (req, res) => {
  const { success } = signupBody.safeParse(req.body);
  if (!success) {
    return res.status(411).json({
      message: "Incorrect inputs",
    });
  }

  const existingUser = await User.findOne({
    username: req.body.username,
  });

  if (existingUser) {
    return res.status(411).json({
      message: "Email already taken/Incorrect inputs",
    });
  }

  const user = await User.create({
    username: req.body.username,
    password: req.body.password,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
  });

  const userId = user._id;

  const token = jwt.sign(
    {
      userId,
    },
    JWT_SECRET
  );

  res.json({
    message: "User created successfully",
    token: token,
  });
});

userRouter.post("/signin", async (req, res, next) => {
  const { success } = signIn.safeParse(req.body);

  if (!success) {
    return res.status(411).json({
      message: "Incorrect inputs",
    });
  }

  const user = await User.findOne({
    username: req.body.username,
  });

  if (!user) {
    return res.status(411).json({
      message: "Incorrect inputs",
    });
  }

  if (user.password !== req.body.password) {
    return res.status(411).json({
      message: "Incorrect inputs",
    });
  }
  const id = user._id;
  const token = jwt.sign(
    {
      id,
    },
    JWT_SECRET
  );

  res.json({
    message: "User login successfully",
    token: token,
  });
});

module.exports = {
  userRouter,
};

const request = require("supertest");
const assert = require("assert");
const express = require("express");
const app = express();
// You have been given an express server which has a few endpoints.
// Your task is to create a global middleware (app.use) which will
// rate limit the requests from a user to only 5 request per second
// If a user sends more than 5 requests in a single second, the server
// should block them with a 404.
// User will be sending in their user id in the header as 'user-id'
// You have been given a numberOfRequestsForUser object to start off with which
// clears every one second
let limit = 5;
let numberOfRequestsForUser = new Map();

const limitCheck = (req, res, next) => {
  try {
    const userId = req.get("user-id");
    let reqCount = numberOfRequestsForUser.has(userId)
      ? numberOfRequestsForUser.get(userId)
      : 0;
    reqCount++;
    if (reqCount >= limit) {
      res.status(404).json({ msg: "Limit exceeded" });
      return res;
    } else {
      numberOfRequestsForUser.set(userId, reqCount);
      next();
    }
  } catch (e) {
    res.status(404).json({ msg: "Invalid Request: no userid found" });
  }
};

app.use(limitCheck);

const att = setInterval(() => {
  numberOfRequestsForUser.clear();
}, 1000);

app.get("/user", function (req, res) {
  res.status(200).json({ name: "john" });
});

app.post("/user", function (req, res) {
  res.status(200).json({ msg: "created dummy user" });
});

// app.listen(3000, () => {
//   console.log("app running on port 3000....");
// });

module.exports = app;

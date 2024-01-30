const express = require("express");
const router = require("./src/routes");
const cors = require("cors");
const app = express();
const { verifyToken } = require("./src/middleware/verify-token");

app.use(express.json());
app.use(cors());
app.use(verifyToken);

app.use("/api/v1", router);

app.listen(8080, () => {
  console.log("app running");
});

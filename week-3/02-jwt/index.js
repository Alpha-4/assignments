const jwt = require("jsonwebtoken");
const jwtPassword = "secret";

function signJwt(username, password) {
  return jwt.sign(
    {
      user: username,
      password: password,
    },
    jwtPassword
  );
}

function verifyJwt(token) {
  jwt.verify(token, jwtPassword);
}

function decodeJwt(token) {
  const tk = verifyJwt(token);
  return tk.user;
}

module.exports = {
  signJwt,
  verifyJwt,
  decodeJwt,
  jwtPassword,
};

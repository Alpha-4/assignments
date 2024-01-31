const zod = require("zod");

const signupBody = zod.object({
  username: zod
    .string()
    .email("username must be valid email")
    .min(3, { message: "Must be 3 or more characters long" })
    .max(30, { message: "Email is too long" }),
  firstName: zod.string().max(30, { message: "firstname is too long" }),
  lastName: zod.string().max(30, { message: "lastname is too long" }),
  password: zod
    .string()
    .min(6, { message: "Must be 6 or more characters long" }),
});

const signIn = zod.object({
  username: zod.string().email("username must be valid email"),
  password: zod.string(),
});

const detailsBody = zod.object({
  firstName: zod
    .string()
    .max(30, { message: "firstname is too long" })
    .optional(),
  lastName: zod
    .string()
    .max(30, { message: "lastname is too long" })
    .optional(),
  password: zod
    .string()
    .min(6, { message: "Must be 6 or more characters long" })
    .optional(),
});

module.exports = {
  signupBody,
  signIn,
  detailsBody,
};

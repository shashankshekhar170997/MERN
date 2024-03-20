const express = require("express");
const router = express.Router();
const User = require("../models/User");
const { body, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
// const { JOSN_SECRET } = require("./constant");

const JWT_SECRET = "finallyihiredinOracleCompany";
// Create a user using : POST "/api/auth/createuser".No login require.
router.post(
  "/createuser",
  [
    body("name", "enter a valid name").isLength({ min: 3 }),
    body("email", "enter a valid email").isEmail(),
    body("password", "password must be atleast 5 characters").isLength({
      min: 5,
    }),
  ],
  async (req, res) => {
    // if there are errors, return Bad request and errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    try {
      // check whether the user with this email exists already.
      let user = await User.findOne({ email: req.body.email });
      if (user) {
        return res
          .status(400)
          .json({ error: "Sorry a user with this email is already exist" });
      }
      const salt = await bcrypt.genSalt(10);
      const secPass = await bcrypt.hash(req.body.password, salt);
      // Create a new User
      user = await User.create({
        name: req.body.name,
        email: req.body.email,
        password: secPass,
      });
      const data = {
        user: {
          id: user.id,
        },
      };
      const authtoken = jwt.sign(data, JWT_SECRET);
      //   res.json(user);
      res.json({ authtoken });
      //   Catch errors
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Some error occourd");
    }
    //   .then((user) => res.json(user))
    //   .catch((err) => {
    //     console.log(err);
    //     res.json({ error: "Please enter unique value", Message: err.message });
    //   });
    // res.send(req.body);
  }
);
module.exports = router;

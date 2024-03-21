const express = require("express");
const router = express.Router();
const User = require("../models/User");
const { body, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const fetchUser = require("../Middleware/FetchUser");
// const { JOSN_SECRET } = require("./constant");

const JWT_SECRET = "finallyihiredinOracleCompany";
// ROUTE 1:  Create a user using : POST "/api/auth/createuser".No login require.
router.post(
  "/createuser",
  //   express validator
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
      res.status(500).send("Internal Server error");
    }
    //   .then((user) => res.json(user))
    //   .catch((err) => {
    //     console.log(err);
    //     res.json({ error: "Please enter unique value", Message: err.message });
    //   });
    // res.send(req.body);
  }
);
// ROUTE 2:  Authenticate a user using : POST "/api/auth/login".No login require.
router.post(
  "/login",
  [
    (body("email", "Enter a valid email").isEmail(),
    body("password", "Password can't be blank").exists()),
  ],
  async (req, res) => {
    // if there are error return bad request and the errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ error: errors.array() });
    }
    const { email, password } = req.body;
    try {
      let user = await User.findOne({ email });
      if (!user) {
        return res
          .status(400)
          .json({ error: "User with this email id is does not exist" });
      }
      const passwordCompare = await bcrypt.compare(password, user.password);
      if (!passwordCompare) {
        return res.status(400).json({ error: "Password is invalid" });
      }
      const payload = {
        user: {
          id: user.id,
        },
      };
      const authtoken = jwt.sign(payload, JWT_SECRET);
      res.json({ authtoken });
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal Server error");
    }
  }
);
// ROUTE 3: Get loggedin user detail : GET "/api/auth/getuser". login require.
// fetchUser is a middleware.
router.post("/getuser", fetchUser, async (req, res) => {
  try {
    const userId = req.user.id;
    const user = await User.findById(userId).select("-password");
    res.send(user);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server error");
  }
});
module.exports = router;

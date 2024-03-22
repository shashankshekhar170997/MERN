const express = require("express");
const router = express.Router();
const fetchUser = require("../Middleware/FetchUser");
const Notes = require("../models/Notes");
// ROUTE 1: Get all the notes : GET "/api/auth/fetchallnotes". login require.

// fetchUser is a middleware.
router.get("/fetchallnotes", fetchUser, async (req, res) => {
  const notes = await Notes.find({ user: req.user.id });
  res.json(notes);
});
module.exports = router;

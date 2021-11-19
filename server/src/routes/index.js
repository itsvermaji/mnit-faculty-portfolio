const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.status(200).json({ msg: "hello there" });
});

router.post('/', (req, res) => {
  res.status(200).json({msg: "this is a post request"})
})

module.exports =  router;

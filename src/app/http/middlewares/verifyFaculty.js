// Middleware verifies faculty

const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    console.log(req.user);
    if(req.user) console.log('user verified');

  } catch (err) {
    console.log(err);
    // return res.json({ flag: 1, msg: "An error occured!" });
  }
  next();
};

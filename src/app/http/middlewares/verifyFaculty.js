// Middleware verifies faculty

const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  try {
    // const token = req.headers.authorization.split(" ")[1];
    // console.log('this is jwt', req.cookies);
    const token = req.headers['x-access-token']

    if (token) {
      // if jwt cookie exists
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user = decoded;
      console.log(`${req.user} is logged in!`);
    } else {
      console.log("User is displayed ordinary info");
    }
  } catch (err) {
    console.log("An error occured while authorization", err);
    // return res.json({ flag: 1, msg: "An error occured!" });
  }
  next();
};

const jwt = require("jsonwebtoken");
const md5 = require("md5");
const pool = require("../../config/dbConnection");

// Registration Rules:
/*
1. check if faculty is already there by email
2. if yes return an error
3. if no register the faculty using md5 hashing

*/

// registers the faculty
module.exports = (req, res) => {
  return {
    // register function
    async register(req, res) {
      const {
        name,
        email,
        password,
        gauthor_id,
        designation,
        qualification,
        contact_detail,
        phone,
        profile_img
      } = req.body;

      try {
        const promisePool = pool.promise();
        let [rows, fields] = await promisePool.query(
          "SELECT * FROM faculties where email = ?",
          [email]
        );

        if (rows.length > 0) {
          return res
            .status(200)
            .json({ msg: "faculty already exists by the same id!" });
        }

        const faculty = {
          name,
          profile_img,
          email,
          hashed_password: md5(password),
          gauthor_id,
          designation,
          qualification,
          contact_detail,
          phone,
        };

        [rows, fields] = await promisePool.query(
          "insert into faculties set ?",
          faculty
        );

        if (rows.affectedRows > 0) {
          return res
            .status(200)
            .json({ msg: "faculty registered", data: rows.insertId });
        }
      } catch (error) {
        console.log(error);
        return res.status(400).json({ msg: "an error occured!" });
      }
    },

    // login function
    async login(req, res) {
      const { email, password } = req.body;

      try {
        if (!email || !password) {
          return res
            .status(400)
            .json({ flag: 2, msg: "Please Fill all the required Fields!" });
        }

        // Check if the entered user email exists

        const promisePool = pool.promise();

        let [rows] = await promisePool.query(
          "SELECT * FROM faculties where email = ?",
          email
        );

        // if email not found or incorrect password
        if (rows.length < 1 || rows[0].hashed_password != md5(password)) {
          return res
            .status(400)
            .json({ flag: 2, msg: "Invalid Email or Password" });
        }

        // After Successful Login, Now Generate a Token
        const token = jwt.sign(
          { id: rows[0].id, role: "faculty" },
          process.env.JWT_SECRET,
          {
            expiresIn: process.env.JWT_EXPIRES_IN,
          }
        );
        console.log("Login Token Generated");

        [rows] = await promisePool.query(
          "SELECT * FROM faculties where email = ?",
          email
        );

        console.log(`User ${rows[0].id} logged in!`);


        return res.status(200).json({ flag: 1, msg: "successful", tkn:token, data: rows[0].id});
      } catch (err) {
        console.log(err);
        return res
          .status(200)
          .json({ flag: 2, msg: "An error occured while logging in!" });
      }
    },

  };
};

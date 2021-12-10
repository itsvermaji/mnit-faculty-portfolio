const conn = require("../../config/dbConnection");
const jwt = require("jsonwebtoken");
const md5 = require("md5");
const pool = require("../../config/dbConnection");
const fetchAuthorData = require("../../helpers/fetchAuthorData");

module.exports = (req, res) => {
  return {
    // register function

    async getFacultyById(req, res) {
      const promisedPool = pool.promise();

      const facultyId = req.params.facultyId;
      console.log(facultyId);

      if (!req.user) {
        console.log("User is displayed ordinary information");

        let [rows] = await promisedPool.query(
          "select id, name, email, designation, contact_detail from faculties where id = ?",
          [facultyId]
        );

        return res.status(200).json({ flag: 1, msg: "success", data: rows });
      } else {
        console.log("User is displayed full information");
        let [rows] = await promisedPool.query(
          "select * from faculties where id = ?",
          [facultyId]
        );

        console.log(rows[0].gauthor_id);

        const authorData = await fetchAuthorData(rows[0].gauthor_id);
        let data = rows;
        data.push(authorData.data);

        // print data
        // console.log(JSON.stringify(authorData.data, null, 2));

        return res.status(200).json({ flag: 1, msg: "success", data });
      }
    },

    async allFaculties(req, res) {
      try {
        const promisePool = pool.promise();

        let [rows, fields] = await promisePool.query("SELECT id, name, email, designation, profile_img, phone FROM faculties");

        return res.status(200).json({ flag: 1, faculties: rows });
      } catch (error) {
        console.log(error);
        return res.status(400).json({ msg: "an error occured!" });
      }
    },

    // login function
    async update(req, res) {
      return res.status(200).json({ msg: "this is update faculty" });
    },

    async delete(req, res) {
      try {
        if (!req.user) {
          return res
            .status(200)
            .json({ flag: 2, msg: "you can't access this page" });
        }

        const facultyId = req.user.id;

        const promisedPool = pool.promise();

        const [rows] = await promisedPool.query('delete from faculties where id = ?', facultyId);

        return res.status(200).json({ msg: "your account has been deleted!" });
      } catch (error) {
        console.log(error);
        return res.status(200).json({ flag: 2, msg: "an error occured!" });
      }
    },
  };
};

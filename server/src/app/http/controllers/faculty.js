const conn = require("../../config/dbConnection");
const jwt = require("jsonwebtoken");
const md5 = require("md5");
const pool = require("../../config/dbConnection");

module.exports = (req, res) => {
  return {
    // register function

    async getFacultyById(req, res) {
      return res.status(200).json({ msg: "this is unique faculty" });
    },

    async allFaculties(req, res) {
      try {

        const promisePool = pool.promise(); 
        
        let [rows, fields] = await promisePool.query("SELECT * FROM faculties");

        return res.status(200).json({ faculties: rows });
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
      return res.status(200).json({ msg: "this is deleting faculty" });
    },
  };
};

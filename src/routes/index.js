const express = require("express");
const router = express.Router();

const facultyAuth = require("../app/http/controllers/facultyAuth");
const facultyService = require("../app/http/controllers/faculty");
const verifyFaculty = require("../app/http/middlewares/verifyFaculty");

// index page
router.get("/test", (req, res) => {
  return res.status(200).json({ msg: "342", hello: 43234 });
});

router.get("/", require("../app/http/controllers/faculty")().allFaculties);


// Faculty Auth
// registration
router.post("/faculty/register", facultyAuth().register);

// login
router.post("/faculty/login", facultyAuth().login);

// faculty operations
// get faculty by id
router.get(
  "/faculty/:facultyId",
  verifyFaculty,
  facultyService().getFacultyById
);

// update faculty
router.put(
  "/faculty/:facultyId/update",
  verifyFaculty,
  facultyService().update
);

// delete faculty
router.delete("/faculty/delete", verifyFaculty, facultyService().delete);

module.exports = router;

const express = require("express");
const path = require("path");
const cookieParser = require('cookie-parser');

// Express Application
const app = express();
// CORS;
app.use(require("cors")());
// Cookie Parser
app.use(cookieParser());
// Dotenv
require("dotenv").config();

// PUBLIC DIRECTORY
const publicDirectory = path.join(__dirname, "./public");
app.use(express.static(publicDirectory));

// Express Parser
app.use(express.urlencoded({ extended: false }));
app.use(express.json());


// Database Connection
// require("./src/app/config/dbConnection");
require("./src/app/config/dbConnection");

// App Routes
const appRoutes = require("./src/routes/index");
app.use("/api", appRoutes);

if(process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'))
}

// Port Settings
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`App is listening on port: ${PORT}`);
});

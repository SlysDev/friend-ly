/**
 * Names: Henok Assalif, {team member 2 insert name here},
 * {team member 3 insert name here}
 *
 * Date Started: 12/23/2024
 *
 * Description: This file contains the API for the Friend-ly app. {Insert more
 * description here later when fleshed out}
 */

"use strict";

// Module imports:

// Importing the express module
const express = require("express");
const app = express();

// Importing the body-parser module
const multer = require("multer");

// Importing the sqlite module (if we decide to use it later)
const sqlite = require("sqlite");
const sqlite3 = require("sqlite3");


// Middleware (Boilerplate code):

// For data sent as form-urlencoded (application/x-www-form-urlencoded)
app.use(express.urlencoded({extended: true}));

// For data sent as json (application/json)
app.use(express.json());

// For data sent as a form (required for FormData use in frontend by the client)
app.use(multer().none());


// Importing the fs module for file reading and writing (Probably gonna use it)
const fs = require('fs').promises;

// Global variables:

const SUCCESS_CODE = 200;
const SERVER_ERROR_CODE = 500;
const USER_ERROR_CODE = 400;
const DEFAULT_PORT = 8000;

// Start of the API

// {fill out after dicussing with the teamwho will do what}


// End of the API

// Helper functions:
/* Establishes a database connection to the database and returns the database object.
* Any errors that occur should be caught in the function that calls this one.
* @returns {sqlite3.Database} - The database object for the connection.
*/
async function getDBConnection() {
 const db = await sqlite.open({
   filename: "FriendlyDatabase.db",
   driver: sqlite3.Database
 });
 return db;
}

/**
 * Closes the database connection.
 * @param {sqlite3.Database} db - The database connection.
 */
async function closeDbConnection(db) {
  try {
    await db.close();
  } catch (error) {
    console.error("Failed to close the database connection:", error);
  }
}

// Allows us to change the port easily by setting an environment
// variable. If no environment variable is set, the port will default to 8000
const PORT = process.env.PORT || DEFAULT_PORT;


/*
Later on, we will change the directory name to the appropriate name for the
front-end files

// Tells the code to serve static files in a directory called 'public'
app.use(express.static('{directory name}'));
*/

// Tells the application to run on the specified port
app.listen(PORT, (err) => {
  if (err) {
    console.error(`Failed to start server on port ${PORT}:`, err);
    process.exit(1);
  } else {
    console.log(`Server running on port ${PORT}`);
  }
});

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
//const sqlite = require("sqlite");
//const sqlite3 = require("sqlite3");

// importing mysql2
const mysql = require('mysql2/promise')

// env variables
require('dotenv').config()


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
* @returns {SQL Database} - The database object for the connection.
*/

async function getSQLConnection() {
  try {
    const connection = await mysql.createConnection({
      host: process.env.DB_HOST,    // Replace with your database host
      user: process.env.DB_USER,// Replace with your database username
      password: process.env.DB_PASSWORD,// Replace with your database password
      database: process.env.DB_NAME// Replace with your database name
    });
    console.log("Friend-ly DB connected. ")
    return connection;
  } catch (err) {
    console.error('Error connecting to the database:', err.message);
    throw err;
  }
}

async function closeSQLConnection(database) {
  await database.end();
  console.log("Connection has been closed.")
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
app.listen(PORT, async (err) => {
  if (err) {
    console.error(`Failed to start server on port ${PORT}:`, err);
    process.exit(1);
  } else {
    console.log(`Server running on port ${PORT}`);
    let database = await getSQLConnection()
    closeSQLConnection(database)
  }
});

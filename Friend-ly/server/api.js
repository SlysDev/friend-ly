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

/**
 * Establishes a server connection and returns an instance of it.
 * @returns {SQLConnection} - A SQL Connection
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

/**
 * Closes a connection to a server
 * @param {SQLConnection} database - A connection to a database
 */
async function closeSQLConnection(database) {
  await database.end();
  console.log("Connection has been closed.")
}

// TODO: Implement a status code for the type of query was executed and the
// code helps with client of the function to understand which type of data
// format to get back (e.g a select query will return a JSON array while a
// Insert into query will return other information)

/**
 * Executes a SQL query on the connection passed to the function
 * @param {SQLConnection} database - A connection to our database
 * @param {String} query - A SQL query in string format
 * @returns {JSON[]} - An array of JSON objects representing
 */
async function queryDatabase(database, query) {
  // Handle empty case later
  if (query === "") {
    // Boilerplate for testing now
    query = 'SELECT m.chat_id, m.message_id, m.message_text, m.sent_at, u.username AS sender '+
    'FROM messages m '+
    'JOIN users u ON m.sender_id = u.user_id '+
    'WHERE m.chat_id = 2 '+
    'ORDER BY m.sent_at ASC; ';
  }
  const [results, fields] = await database.execute(query);
  return results;
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
    let query = await queryDatabase(database)
    console.log(query)
    //closeSQLConnection(database)

  }
});

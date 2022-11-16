
const sqlite3 = require('sqlite3');
const express = require("express");
var app = express();

const db = new sqlite3.Database('./db/test2.db', (err) => {
  if (err) {
    console.error("Erro opening database " + err.message);

  } else {


    db.run('CREATE TABLE subject( subject_id TEXT PRIMARY KEY NOT NULL,name NVARCHAR(20),content NVARCHAR(100))', (err) => {
      if (err) {
        console.log(err);
      }
      let insert = 'INSERT INTO subject (subject_id,name) VALUES (?,?)';
      db.run(insert, ["343", "biology"]);

    });
  }
});


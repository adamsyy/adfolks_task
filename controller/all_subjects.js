


const sqlite3 = require('sqlite3');
const express = require("express");
const { db, db_url } = require('../constants/db');
var app = express();




module.exports.all_subjects = async (req, res, next) => {


  const db = new sqlite3.Database(db_url, (err) => {
    if (err) {
      console.error("Erro opening database " + err.message);

    } else {
      var sql = "select * from subject"
      var params = []
      db.all(sql, params,
        (err, rows) => {
          if (err) {
            res.status(400).json({ "error": err.message });
            return;
          }
          res.status(200).json({
            "message": "success",
            "data": rows
          })
        }
      );
    }
  });



}
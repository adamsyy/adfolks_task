


const sqlite3 = require('sqlite3');
const express = require("express");
const { db_url } = require('../constants/db');
var app = express();




module.exports.get_subject = async (req, res, next) => {


  const db = new sqlite3.Database(db_url, (err) => {
    if (err) {
      console.error("Erro opening database " + err.message);

    } else {
      var sql = "select * from subject where subject_id = ?";
      var params = [req.params.id];
      db.get(sql, params, (err, result) => {
        if (err) {
          res.status(400).json({ "error": err.message });
          return;
        }
        res.json({
          message: "success",
          data: result
        });
      });
    }
  });



}
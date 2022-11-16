


const sqlite3 = require('sqlite3');
const express = require("express");
const { db_url } = require('../constants/db');
var app = express();




module.exports.subject_content = async (req, res, next) => {

  const db = new sqlite3.Database(db_url, (err) => {
    if (err) {
      console.error("Erro opening database " + err.message);

    }
    else {
      let sql = `UPDATE subject SET content = ? WHERE subject_id = ?`;
      let data = [req.body.content, req.params.subject_id];
      db.run
        (sql
          , data
          , function (err, result) {
            if (err) {
              res.status(400).json({ "error": err.message });
              return;
            }
            res.json({
              "message": "success",
              "data": data,
              "changes": this.changes
            })
          });


    }
  });
}
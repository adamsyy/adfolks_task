


const sqlite3 = require('sqlite3');
const express = require("express");
const { db_url } = require('../constants/db');
var app = express();




module.exports.update_subject = async (req, res, next) => {

  const db = new sqlite3.Database(db_url, (err) => {
    if (err) {
      console.error("Erro opening database " + err.message);

    }
    else {


      var data = {
        name: req.body.name,
      }
      db.run(
        `UPDATE subject set 
                   name = COALESCE(?,name)
                   WHERE subject_id = ?`,
        [data.name, req.params.id],
        function (err, result) {
          if (err) {
            res.status(400).json({ "error": res.message })
            return;
          }
          res.json({
            message: "success",
            data: data,
            changes: this.changes
          })
        });



    }
  });
}



const sqlite3 = require('sqlite3');
const express = require("express");
const { db_url } = require('../constants/db');
var app = express();




module.exports.create_subject = async (req, res, next) => {


    const db = new sqlite3.Database(db_url, (err) => {
        if (err) {
            console.error("Erro opening database " + err.message);

        } else {
            var reqBody = req.body;

            db.run(`INSERT INTO subject (subject_id,name) VALUES (?,?)`,
                [reqBody.subject_id, reqBody.name],
                function (err, result) {
                    if (err) {
                        res.status(400).json({ "error": err.message })
                        return;
                    }
                    res.status(201).json({
                        "subject_id": this.lastID
                    })
                });
        }
    });



}
var create_subject = require('../controller/create_subject');
var express = require('express');
const router = require("express").Router();


router.post('/subject', create_subject);

module.exports = router;
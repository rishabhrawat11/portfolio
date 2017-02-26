const express = require('express');
const router = express.Router();

//declare axios for HTTP request
const axios = require('axios');
const API = 'https://jsonplaceholder.typicode.com';

router.get('/', function(req,res,next){
    res.send('api works');
});



module.exports = router;
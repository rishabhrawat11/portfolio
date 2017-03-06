const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');

var mongoose = require('mongoose');

const api = require('./server/routes/api');

const app = express();
mongoose.connect('mongodb://localhost/portfolio',function(){
  console.log("database is connected");
});

//Parse data for POST request
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

//point static path to dist
app.use(express.static(path.join(__dirname,'dist')));

//set api routes
app.use('/api',api);

//call all routes and send it to index.html
app.get('*', function(req,res){
    res.sendFile(path.join(__dirname, 'dist/index.html'));
});

//get port from Environment and store it in express
const port = process.env.PORT || 3000;
app.set('port',http.address().port);

//create HTTP server
const server = http.createServer(app);

//Listen on provided port, on all network interfaces
server.listen(port, function(){
  console.log("API Server is running at"+ port);
});

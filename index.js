const express = require('express');
const app = express();
const config = require('./config/database');
const path = require('path');
var mongoose =  require('mongoose');

mongoose.Promise = require('bluebird');


mongoose.connect(config.uri, { useMongoClient: true })
.then(() => { console.log('mongodb connected...') })
.catch(err => { console.log(err) });

app.use(express.static(__dirname + '/client/dist/'));

app.get('*',(req,res) => {
    res.sendFile(path.join(__dirname + '/client/dist/index.html'));
});

app.listen(8080, () => {
    console.log('Listening on port 8080');
});
var express = require('express'),
  path = require('path'),
  bodyParser = require('body-parser'),
  cors = require('cors'),
  mongoose = require('mongoose');

mongoose.connect("mongodb://vue:amlo123@ds259154.mlab.com:59154/vue-node")
  .then(() => { console.log('Database connection is successful') },
    err => { console.log('Error when connecting to the database' + err) });

const app = express();
app.use(express.static('public'));
app.use(bodyParser.json());
app.use(cors());

var port = process.env.PORT || 4000;

app.listen(() => {
  console.log('Listening port ' + port)
});


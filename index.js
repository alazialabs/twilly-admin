//Imports============================
const http = require('http');
const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const port = '8000';
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(express.static(path.join(__dirname, 'dist/admin/')));

app.set('port', port);
const server = http.Server(app);


// app.use(function (req, res, next) {
//   res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
//   res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
//   res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
//   res.setHeader('Access-Control-Allow-Credentials', true);
//   next();
// });


app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/admin/'));
});

server.listen(port, () => {
  console.log(`Client server listening on port ${port}`);
});

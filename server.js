const express = require('express');
const bodyParser = require('body-parser');
const errorHandler = require('errorhandler');
const routes = require('./backend');
const contentDisposition = require('content-disposition')
const destroy = require('destroy')
const fs = require('fs')
const onFinished = require('on-finished')

const app = express();

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/static'));
app.use('/public', express.static(__dirname + '/public'));

let env = process.env.NODE_ENV;
if ('development' == env) {
  app.use(errorHandler({
    dumpExceptions: true,
    showStack: true
  }));
}

if ('production' == app.get('env')) {
  app.use(errorHandler());
}

app.get('/', routes.index);
app.get('/android.apk', function (req, res) {
  let filePath = './static/app.apk';
  res.setHeader('Content-Type', 'application/octet-stream')
  res.setHeader('Content-Disposition', contentDisposition(filePath))
 
  // send file
  let stream = fs.createReadStream(filePath)
  stream.pipe(res)
  onFinished(res, function () {
    destroy(stream)
  })
})

app.listen(7220, () => console.log('listen on port 7220'));
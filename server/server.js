const http = require('http');
const app = require('./config/express');

http.createServer(app).listen(8080, function() {
  console.log(`Server is running on: ${this.address().port}`);
});

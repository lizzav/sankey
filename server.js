const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('src/backend/db.json');
const middlewares = jsonServer.defaults({
  static: './build'
});
const PORT = process.env.PORT || 8000;
server.use(middlewares);
server.use(jsonServer.rewriter({
  '/api/*': '/$1',
}))
server.use(router);
server.listen(PORT, () => {
  console.log('Server is running');
});

//Install express server
const express = require('express');
const path = require('path');

const app = express();

// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/dist/sankey'));

app.get('/*', function(req,res) {

  res.sendFile(path.join(__dirname+'/dist/sankey/index.html'));
});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);

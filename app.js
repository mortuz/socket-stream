const express = require('express');
const { ExpressPeerServer } = require('peer');

const app = express();
let port = process.env.PORT || 9000;
app.get('/', (req, res, next) => res.send('Hello world!'));

const server = app.listen(port, () => {
  console.log('server is running on port 9000')
});

const peerServer = ExpressPeerServer(server, {
  debug: true,
  path: '/myapp'
});

app.use('/peerjs', peerServer);
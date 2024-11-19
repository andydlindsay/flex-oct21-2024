const net = require('net');

const server = net.createServer(); // create a TCP server for us
const port = 3001;

const connections = [];

server.on('connection', (connection) => {
  console.log('someone has connected');

  connections.push(connection);
  // console.log(connections.length);

  // send a welcome message to the client
  connection.write('welcome to the server!');

  // set the encoding on the connection object
  connection.setEncoding('utf-8');

  // listen for incoming data
  connection.on('data', (data) => {
    console.log('client says:', data);

    // echo the received data back out to all connected clients
    for (const conn of connections) {
      if (conn !== connection) {
        conn.write(data);
      }
    }
  });
});

server.listen(port, () => {
  console.log('server is runnning on port', port);
});

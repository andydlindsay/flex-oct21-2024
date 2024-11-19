const net = require('net');

const config = {
  host: 'localhost',
  port: 3001,
};

const connection = net.createConnection(config);

// set the encoding on the incoming connection
connection.setEncoding('utf-8');

// send something to the server
connection.write('nice to be here');

// listen for incoming messages
connection.on('data', (data) => {
  console.log('server says:', data);
});

// set the encoding on stdin
process.stdin.setEncoding('utf-8');

// listen for input from stdin
process.stdin.on('data', (data) => {
  // console.log(data.trim());
  connection.write(data.trim());
});

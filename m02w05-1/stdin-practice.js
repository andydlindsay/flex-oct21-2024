// standard in (stdin) => terminal
// standard out (stdout) => terminal

// process.stdout.write('hello world');

process.stdin.setEncoding('utf-8');

process.stdin.on('data', (data) => {
  console.log('you typed:', data.trim()); // remove the newline character
});

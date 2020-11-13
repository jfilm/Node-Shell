process.stdout.write('prompt > ');

process.stdin.on('data', (data) => {
  const cmd = data.toString().trim();
  if (cmd === 'pwd') {
    pwd(); //require('./pwd');
  } else if (cmd === 'ls') {
    ls();
  } else {
    process.stdout.write('You typed: ' + cmd);
  }
  process.stdout.write('\nprompt > ');
});

const ls = require('./ls');
const pwd = require('./pwd');

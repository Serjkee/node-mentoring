import readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on('line', (string) => {
  console.log('input', string);
  console.log('output', string.split('').reverse().join(''));
});
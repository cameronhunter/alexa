const spawn = require('cross-spawn');

module.exports = (command, ...args) =>
  new Promise((resolve, reject) => {
    spawn(command, args, { stdio: 'inherit' }).on('close', (exitCode) => {
      if (exitCode !== 0) {
        reject(`${command} ${args.join(' ')}`);
      } else {
        resolve();
      }
    });
  });

var chalk = require('chalk');

var message = chalk.bold('Hi! ') + chalk.bgRedBright('this is my') + chalk.bgBlue(' first') + chalk.yellow(' use of') + chalk.bgMagenta('Chalk');

console.log(message);
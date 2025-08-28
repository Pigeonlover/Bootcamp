//

// const chalk = require("chalk"); // CommonJS
import chalk from "chalk"; // ES6 JS

console.log(chalk.blue("Hello world!"));

// Changing text colours
console.log(chalk.red("This is another message!"));
console.log(chalk.green("This is yet another message, in green!"));
console.log(chalk.yellow("This is a yellow message!"));

// Styling the text
console.log(chalk.bold("This is now a bold message!"));
console.log(chalk.italic("This is an italic message!"));
console.log(chalk.underline("This is an underlined message!"));
console.log(chalk.strikethrough("This is a strikethrough-ed(?) message!"));

// Changing background colours
console.log(chalk.bgBlue("This message has a blue background!"));
console.log(chalk.bgRed("This message has a red background!"));
console.log(chalk.bgGreen("This message has a green background!"));
console.log(chalk.bgYellow("This message has a yellow background!"));
console.log(chalk.bgBlack("This message has a black background!"));

// You can mix styles
console.log(
  chalk.blue.underline.italic("This message is blue, underlined and italic!")
);

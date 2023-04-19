import chalk from 'chalk';
export function displaySuccess(text) {
    console.log(chalk.green(text));
}
export function displayError(text) {
    console.error(chalk.bold.red(text));
}
//# sourceMappingURL=index.js.map
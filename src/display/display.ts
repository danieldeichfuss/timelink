import chalk from 'chalk';

export function displaySuccess(text: string) {
  console.log(chalk.green(text));
}

export function displayError(text: string) {
  console.error(chalk.bold.red(text));
}

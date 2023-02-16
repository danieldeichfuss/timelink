import chalk from 'chalk';
import ora from 'ora';
import logSymbols from 'log-symbols';

let spinner: ora.Ora | undefined;

export function displaySpinner(text: string) {
  if (spinner) {
    spinner.text = chalk.green(text);
  } else {
    spinner = ora(chalk.green(text)).start();
  }

  return finishSpinner;
}

function finishSpinner() {
  if (spinner) {
    spinner.stopAndPersist({
      symbol: logSymbols.success,
      text: 'done',
    });
  }
}

export function displayError(text: string) {
  console.error(chalk.bold.red(text));
}

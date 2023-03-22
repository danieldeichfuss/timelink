import chalk from 'chalk';
import ora from 'ora';
import logSymbols from 'log-symbols';

export function Spinner(text: string) {
  const spinner = ora(chalk.green(text)).start();

  return {
    update(text: string) {
      spinner.text = chalk.green(text);
    },
    stop(text: string) {
      spinner.stopAndPersist({
        symbol: logSymbols.success,
        text,
      });
    },
  };
}

export function error(text: string) {
  console.error(chalk.bold.red(text));
}

#!/usr/bin/env node
import ora from 'ora';
import logSymbols from 'log-symbols';

export async function cli(args: string[]) {
  const timeInS = 10;

  console.log({ args });

  const spinner = ora(timeInS.toString()).start();

  tick(timeInS, spinner);
}

function tick(timeInS: number, spinner: any) {
  setTimeout(() => {
    timeInS--;

    spinner.text = timeInS.toString();

    if (timeInS >= 0) {
      tick(timeInS, spinner);
    } else {
      spinner.text = 'DONE \n';
      spinner.stopAndPersist({
        symbol: logSymbols.success,
        text: 'done',
      });
    }
    return timeInS;
  }, 1000);
}

cli(process.argv);

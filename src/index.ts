import { error, Spinner } from './display/display';
import { startTimer } from './timer/timer';

export function cli(args: string[]) {
  const input = args[2];

  if (!input) {
    error('Uuups! Tell us how long your timer should run.');
    return;
  }

  if (args.length > 3) {
    error(
      "Slow your 🐴, that's too much input. Just tell me the time and we are good 🤝."
    );
    return;
  }

  try {
    startTimer(input, Spinner);
  } catch (e) {
    if (e instanceof Error) {
      error(e.message);
    } else {
      error(`Unknown error: ${e}`);
    }
  }
}

cli(process.argv);

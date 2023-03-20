import { error, Spinner } from './display/display';
import { startTimer } from './timer/timer';
import { parseInputToSeconds } from './parse-input/parse-input';

export function cli(args: string[]) {
  const rawInput = args[2];

  if (!rawInput) {
    error('Uuups! Tell us how long your timer should run.');
    return;
  }

  const parsedInput = parseInputToSeconds(rawInput);

  if (Number.isNaN(parsedInput)) {
    error('So sorry, I can only count numbers!');
    return;
  }

  if (args.length > 3) {
    error(
      "Slow your 🐴, that's too much input. Just tell me the time and we are good 🤝."
    );
    return;
  }

  startTimer(parsedInput, Spinner);
}

cli(process.argv);

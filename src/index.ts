import { displayError, displaySuccess } from './display/display';

export function cli(args: string[]) {
  const rawInput = args[2];
  const parsedInput = Number.parseInt(rawInput);

  if (!rawInput) {
    displayError('Uuups! Tell us how long your timer should run.');
    return;
  }

  if (Number.isNaN(parsedInput)) {
    displayError('So sorry, I can only count numbers!');
  }

  if (args.length > 3) {
    displayError(
      "Slow your 🐴, that's too much input. Just tell me the time and we are good 🤝."
    );
    return;
  }

  displaySuccess(`Hello ${parsedInput}!`);
}

cli(process.argv);

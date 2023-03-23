jest.mock('./display/display');
jest.mock('console');
jest.useFakeTimers();

import { jest } from '@jest/globals';
import { error, Spinner } from './display/display';
import { cli } from './index';
import * as timer from './timer/timer';

const baseArgs = [
  '/Users/danieldeichfuss/.volta/tools/image/node/18.13.0/bin/node',
  '/Users/danieldeichfuss/CODE/timelink/dist/index.js',
];

beforeEach(() => {
  jest.restoreAllMocks();
});

it('should run successfully', () => {
  const spyStartTimer = jest.spyOn(timer, 'startTimer');

  cli([...baseArgs, '10']);

  expect(spyStartTimer).toHaveBeenCalledWith('10', Spinner);
});

it('should show missing input error', () => {
  cli([...baseArgs]);

  expect(error).toHaveBeenCalledWith(
    'Uuups! Tell us how long your timer should run.'
  );
});

it('should show too much input error', () => {
  cli([...baseArgs, '10', 'something else']);

  expect(error).toHaveBeenCalledWith(
    "Slow your 🐴, that's too much input. Just tell me the time and we are good 🤝."
  );
});

it('should show invalid input error', () => {
  cli([...baseArgs, 'something else']);

  expect(error).toHaveBeenCalledWith('So sorry, I can only count numbers!');
});

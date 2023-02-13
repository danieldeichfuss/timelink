jest.mock('./display/display');
jest.mock('console');

import { jest } from '@jest/globals';
import { displayError, displaySuccess } from './display/display';
import { cli } from './index';

const baseArgs = [
  '/Users/danieldeichfuss/.volta/tools/image/node/18.13.0/bin/node',
  '/Users/danieldeichfuss/CODE/timelink/dist/index.js',
];

beforeEach(() => {
  jest.clearAllMocks();
});

it('should run successfully', () => {
  cli([...baseArgs, '10']);

  expect(displaySuccess).toHaveBeenCalledWith('Hello 10!');
});

it('should show missing input error', () => {
  cli([...baseArgs]);

  expect(displayError).toHaveBeenCalledWith(
    'Uuups! Tell us how long your timer should run.'
  );
});

it('should show too much input error', () => {
  cli([...baseArgs, '10', 'something else']);

  expect(displayError).toHaveBeenCalledWith(
    "Slow your 🐴, that's too much input. Just tell me the time and we are good 🤝."
  );
});

it('should show invalid input error', () => {
  cli([...baseArgs, 'something else']);

  expect(displayError).toHaveBeenCalledWith(
    'So sorry, I can only count numbers!'
  );
});

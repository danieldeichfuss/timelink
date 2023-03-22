import { jest } from '@jest/globals';
import { error, Spinner } from './display';
import chalk from 'chalk';
import ora from 'ora';
import logSymbols from 'log-symbols';

jest.mock('ora', () => {
  const spinnerObject = { text: 'text', stopAndPersist: jest.fn() };
  const start = jest.fn(() => spinnerObject);
  return jest.fn(() => ({ start }));
});

const consoleErrorSpy = jest
  .spyOn(console, 'error')
  .mockImplementation(() => null);

beforeEach(() => {
  consoleErrorSpy.mockClear();
});

it('should display the spinner correctly', () => {
  const spinner = Spinner('something');

  expect(ora).toHaveBeenCalledWith(chalk.green('something'));
  expect(ora().start).toHaveBeenCalledWith();

  spinner.update('something else');

  // for some reason .toBe and .toEqual fails on the same string
  expect(ora().start().text).toMatch(/something else/);

  spinner.stop('Done');

  expect(ora().start().stopAndPersist).toHaveBeenCalledWith({
    symbol: logSymbols.success,
    text: 'Done',
  });
});

it('should log error', () => {
  error('test');

  expect(console.error).toHaveBeenCalledWith(chalk.bold.red('test'));
});

import { jest } from '@jest/globals';
import { displayError, displaySuccess } from './display';
import chalk from 'chalk';

console.log = jest.fn();
console.error = jest.fn();

it('should log success', () => {
  displaySuccess('test');

  expect(console.log).toHaveBeenCalledWith(chalk.green('test'));
});

it('should log error', () => {
  displayError('test');

  expect(console.error).toHaveBeenCalledWith(chalk.bold.red('test'));
});

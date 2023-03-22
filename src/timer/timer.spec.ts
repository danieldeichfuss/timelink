jest.useFakeTimers();
jest.spyOn(global, 'setInterval');

import { startTimer } from './timer';

beforeEach(() => {
  jest.resetAllMocks();
});

it('should call the callback every second', () => {
  const displayCallbackMock = { update: jest.fn(), stop: jest.fn() };
  const callbackMock = jest.fn(() => displayCallbackMock);

  startTimer(3, callbackMock);
  jest.runAllTimers();

  expect(callbackMock).toBeCalledWith('3');
  expect(displayCallbackMock.update).toHaveBeenCalledTimes(3);
  expect(displayCallbackMock.stop).toHaveBeenCalledWith('Done');
});

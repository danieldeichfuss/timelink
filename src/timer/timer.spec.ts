jest.useFakeTimers();
jest.spyOn(global, 'setInterval');
jest.mock('node-notifier', () => ({
  notify: jest.fn(),
}));

import nodeNotifier from 'node-notifier';
import { startTimer } from './timer';

beforeEach(() => {
  jest.resetAllMocks();
});

it('should call the callback every second', () => {
  const displayCallbackMock = { update: jest.fn(), stop: jest.fn() };
  const callbackMock = jest.fn(() => displayCallbackMock);

  startTimer('3', callbackMock);
  jest.runAllTimers();

  expect(callbackMock).toBeCalledWith('00:00:03');
  expect(displayCallbackMock.update).toHaveBeenCalledTimes(3);
  expect(displayCallbackMock.stop).toHaveBeenCalledWith('Done');
  expect(nodeNotifier.notify).toHaveBeenCalledWith({
    title: 'DONE',
    message: 'Timer is over!',
    sound: 'Ping',
  });
});

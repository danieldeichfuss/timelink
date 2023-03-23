import notifier from 'node-notifier';
import { parseInputToSeconds } from '../parse-input/parse-input';
import { parseDurationToString } from '../parse-duration-to-string/parse-duration-to-string';

export type TimerType = (duration: string) => {
  update: (time: string) => void;
  stop: (message: string) => void;
};

export function startTimer(duration: string, Timer: TimerType): void {
  const parsedDuration = parseInputToSeconds(duration);

  if (parsedDuration === undefined || Number.isNaN(parsedDuration)) {
    throw new Error('So sorry, I can only count numbers!');
  }

  const startTime = Date.now();
  const timer = Timer(parseDurationToString(parsedDuration));

  const intervalId = setInterval(() => {
    const timePassedInSeconds = (Date.now() - startTime) / 1000;
    const durationLeft = Math.round(parsedDuration - timePassedInSeconds);

    timer.update(parseDurationToString(durationLeft));

    if (durationLeft <= 0) {
      clearInterval(intervalId);
      timer.stop('Done');

      let notificationCounter = 5;

      const notificationIntervalId = setInterval(() => {
        if (notificationCounter <= 0) {
          clearInterval(notificationIntervalId);
          return;
        }

        notificationCounter--;
        notifier.notify({
          title: 'DONE',
          message: 'Timer is over!',
          sound: 'Ping',
        });
      }, 1015);
    }
  }, 1000);
}

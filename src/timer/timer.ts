import notifier from 'node-notifier';

export type TimerType = (duration: string) => {
  update: (time: string) => void;
  stop: (message: string) => void;
};

export function startTimer(duration: number, Timer: TimerType): void {
  const startTime = Date.now();
  const timer = Timer(duration.toString());

  const intervalId = setInterval(() => {
    const timePassedInSeconds = (Date.now() - startTime) / 1000;
    const durationLeft = Math.round(duration - timePassedInSeconds);

    timer.update(durationLeft.toString());

    if (durationLeft <= 0) {
      clearInterval(intervalId);
      timer.stop('Done');
      notifier.notify({
        title: 'DONE',
        message: 'Timer is over!',
        sound: 'Ping',
      });
    }
  }, 1000);
}

export function startTimer(
  duration: number,
  displayCallback: (durationLeft: string) => () => void
) {
  const startTime = Date.now();
  displayCallback(duration.toString());

  const intervalId = setInterval(() => {
    const timePassedInSeconds = (Date.now() - startTime) / 1000;
    const durationLeft = Math.round(duration - timePassedInSeconds);

    const finishCallback = displayCallback(durationLeft.toString());

    if (durationLeft <= 0) {
      clearInterval(intervalId);
      finishCallback();
    }
  }, 1000);
}

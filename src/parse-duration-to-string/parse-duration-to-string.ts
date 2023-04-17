export function parseDurationToString(duration: number) {
  const dayInSeconds = 86400;

  if (duration >= dayInSeconds) {
    throw new Error('This is a timer not a calendar! Try to stay under a day');
  }

  const durationInMs = duration * 1000;

  return new Date(durationInMs).toISOString().slice(11, 19);
}

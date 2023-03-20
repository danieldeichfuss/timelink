export function parseInputToSeconds(input: string) {
  const split = input.split(':').reverse();

  const result = split.reduce((previousValue, currentValue, index) => {
    // TODO: Need to add error handling here, in case parsing to Int doesn't work
    const result = Number.parseInt(currentValue) * Math.pow(60, index);

    return result + previousValue;
  }, 0);

  return result;
}

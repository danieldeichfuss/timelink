export function parseInputToSeconds(input: string) {
  const split = input.split(':').reverse();

  let result;

  try {
    result = split.reduce((previousValue, currentValue, index) => {
      const result = Number.parseInt(currentValue) * Math.pow(60, index);

      return result + previousValue;
    }, 0);
  } catch (error) {
    console.error('Invalid input. Please follow the format', error);
  }

  return result;
}

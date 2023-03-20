import { parseInputToSeconds } from './parse-input';

it('should parse seconds to seconds', () => {
  const result = parseInputToSeconds('10');

  expect(result).toBe(10);
});

it('should parse minutes to seconds', () => {
  const result = parseInputToSeconds('10:10');

  expect(result).toBe(610);
});

it('should parse hourse to seconds', () => {
  const result = parseInputToSeconds('1:10:10');

  expect(result).toBe(4210);
});

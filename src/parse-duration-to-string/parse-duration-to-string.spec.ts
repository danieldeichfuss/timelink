import { parseDurationToString } from './parse-duration-to-string';

it('should parse seconds', () => {
  expect(parseDurationToString(3)).toBe('00:00:03');
});

it('should parse minutes', () => {
  expect(parseDurationToString(63)).toBe('00:01:03');
});

it('should parse hours', () => {
  expect(parseDurationToString(3603)).toBe('01:00:03');
});

it('should NOT parse days', () => {
  expect(() => {
    parseDurationToString(172803);
  }).toThrow();
});

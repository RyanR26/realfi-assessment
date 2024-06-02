import counter from '../../src/utils/counter'

test('Count to reset to zero after hitting divisor', () => {

  const countDivisor = 3;
  const count = counter(countDivisor);

  expect(count(0)).toBe(0)
  expect(count(1)).toBe(1)
  expect(count(2)).toBe(2)
  expect(count(3)).toBe(0)
  expect(count(4)).toBe(1)
  expect(count(5)).toBe(2)
  expect(count(6)).toBe(0)
  expect(count(7)).toBe(1)
  expect(count(8)).toBe(2)

});
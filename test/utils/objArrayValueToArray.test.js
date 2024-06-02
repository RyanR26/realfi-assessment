import objArrayValueToArray from '../../src/utils/objArrayValueToArray';

test('Extract single property from object in array into its own new array', () => {

  const testArray = [
    { a: 'foo', b: 'bar' },
    { a: 'test', b: 2 },
    { a: 'cat', b: false }
  ];

  const newArray1 = objArrayValueToArray(testArray, 'a');
  const newArray2 = objArrayValueToArray(testArray, 'b');

  expect(newArray1).toStrictEqual(['foo', 'test', 'cat']);
  expect(newArray2).toStrictEqual(['bar', 2, false]);

})
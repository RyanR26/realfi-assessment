import calculateCurrentAge from '../../src/utils/calculateCurrentAge'

it('Should calculate the current age from birthdate Date obj', () => {
  const birthDayDate = new Date('10/26/1983'); 
  const age = calculateCurrentAge(birthDayDate);
  expect(age).toBe(40);
});
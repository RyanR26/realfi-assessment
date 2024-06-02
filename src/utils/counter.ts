export default function counter(countDivisor: number) {

  let counter = 0;

  return function(index: number) {
    if((index === 0 || (index) % countDivisor == 0)) {
      counter = 0;
    } else {
      counter ++;
    }
    return counter;
  }
};
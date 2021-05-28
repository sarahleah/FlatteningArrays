let arrays = [[1, 2, 3], [4, 5], [6]];
const flatten = array => {
  const reducer = (accumulator, currentValue) => {
    accumulator.concat(currentValue);
  }
  return array.reduce(reducer);
}
// → [1, 2, 3, 4, 5, 6]
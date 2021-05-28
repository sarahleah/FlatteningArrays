let arrays = [[1, 2, 3], [4, 5], [6]];
const flatten = array => {
  const reducer = (accumulator, currentValue) => {
    return accumulator.concat(currentValue);
  }
 return arrays = arrays.reduce(reducer, []);
}
console.log(flatten(arrays));
// → [1, 2, 3, 4, 5, 6]
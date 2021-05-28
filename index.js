let arrays = [[1, 2, 3], [4, 5], [6]];
const flatten = array => {
  let newArray = [];
  const reducer = (accumulator, currentValue) => {
    accumulator.concat(currentValue);
  }
  for (let item of array) {
    newArray += item.reduce(reducer);
  }
  return newArray;
}
console.log(flatten(arrays));
// → [1, 2, 3, 4, 5, 6]
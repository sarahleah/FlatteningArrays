let arrays = [[1, 2, 3], [4, 5], [6]];
const flatten = array => {
  let newArray = [];
  return newArray.concat.apply([], arrays);
}
console.log(flatten(arrays));
// → [1, 2, 3, 4, 5, 6]
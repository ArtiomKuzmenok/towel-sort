
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (!Array.isArray(matrix) || matrix == []) return [];
  else {  
    let i = 1;
    while (i < matrix.length) {
      matrix[i] = matrix[i].reverse()
      i += 2;
    }
  }
    return matrix.flat(Infinity);
};

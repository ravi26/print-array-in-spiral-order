var spiralOrder = function(A, m, n) {
  var finalArray = new Array();
  var T = 0,
    B = m - 1,
    L = 0,
    R = n - 1;
  var d = 0;
  while (L <= R && T <= B) {
    if (d === 0) {
      for (var i = L; i <= R; i++) {
        finalArray.push(A[T][i]);
      }
      T++;
    } else if (d === 1) {
      for (var j = T; j <= B; j++) {
        finalArray.push(A[j][R]);
      }
      R--;
    } else if (d === 2) {
      for (var k = R; k >= L; k--) {
        finalArray.push(A[B][k]);
      }
      B--;
    } else if (d === 3) {
      for (var i = B; i >= T; i--) {
        finalArray.push(A[i][L]);
      }
      L++;
    }
    d = (d + 1) % 4;
  }
  return finalArray;
};
let A = [[1, 2, 3, 10], [4, 5, 6, 11], [7, 8, 9, 12]];
let m = 3;
let n = 3;

console.log(spiralOrder(A, m, n));

//! this return max from Array
function arrMax(arr) {
   let size = arr.length;
   let currMax = arr[0];
   for (let i = 0; i < size - 1; i++) {
      if (arr[i] > currMax) {
         currMax = arr[i];
      }
   }
   return currMax;
}
let a = [2, 1, 1, 0, 2, 5, 4, 0, 2, 8, 7, 7, 9, 2, 0, 1, 9];

//! this output is the max from the array!!!
//! test merging branch
let z = "merging branch from branch ot master";

console.log(arrMax(a));

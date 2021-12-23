function countingSort(arr) {
   const count = [];

   for (let i = min; i <= max; i++) {
      count[i] = 0;
   }
   for (let i = 0; i < arr.length; i++) {
      count[arr[i]]++;
   }
   const sortedArr = [];
   for (let i = min; i <= max; i++) {
      while (count[i] > 0) {
         sortedArr.push(i);
         count[i]--;
      }
   }
   return sortedArr;
}

let a = [2, 1, 1, 0, 2, 5, 4, 0, 2, 8, 7, 7, 9, 2, 0, 1, 9];
let max = Math.max(...a);
let min = Math.min(...a);
console.log(countingSort(a));

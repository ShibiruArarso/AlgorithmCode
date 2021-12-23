let a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

function binerySearch(arr, target) {
   let start = 0;
   let end = arr.length - 1;
   while (start <= end) {
      let mid = Math.floor((start + end) / 2);
      if (arr[mid] === target) {
         return `It's found at index of ${mid}`;
      } else if (arr[mid] > target) {
         end = mid - 1;
      } else if (arr[mid] < target) {
         start = mid + 1;
      }
   }
   return -1;
}

console.log(binerySearch(a, 5));

function leanerSearch(arr, target) {
   for (var i = 0; i < arr.length; i++) {
      if (arr[i] === target) {
         return `Its found at index of ${i}`;
      }
   }
   return false;
}
let a = [5, 9, 3, 0, 43, 27, 13];
console.log(leanerSearch(a, 27));

function sumRec(arr) {
   if (arr.length === 0) {
      return 0;
   }
   return arr.pop() + sumRec(arr);
}
let a = [1, 2, 3, 4, 5];
console.log(sumRec(a));

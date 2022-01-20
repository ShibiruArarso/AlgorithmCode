function selectionSort(arr) {
   let n = arr.length;
   for (let i = 0; i < n; i++) {
      for (let j = i + 1; j < n - 1; j++) {
         if (arr[j] < arr[i]) {
            let tmp = arr[i];
            arr[i] = arr[j];
            arr[j] = tmp;
         }
      }
   }
   return arr;
}
let a = [2, 1, 1, 0, 2, 5, 4, 0, 2, 8, 7, 7, 9, 2, 0, 1, 9];
console.log(selectionSort(a));

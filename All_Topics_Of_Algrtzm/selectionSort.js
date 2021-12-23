function selectionSort(arr) {
   let size = arr.length;
   for (let i = 0; i < size; i++) {
      for (let j = i + 1; j < size - 1; j++) {
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

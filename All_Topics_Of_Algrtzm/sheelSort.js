let a = [4, 1, 0, 6, 3, 2, 19, 8];

function shellSort(arr) {
   let n = arr.length;

   for (let gap = Math.floor(n / 2); gap > 0; gap = Math.floor(gap / 2)) {
      for (let j = gap; j < n; j++) {
         let temp = arr[j];
         let i;
         for (i = j; i >= 0 && arr[i - gap] > temp; i -= gap) {
            arr[i] = arr[i - gap];
         }
         arr[i] = temp;
      }
   }

   return arr;
}

console.log(shellSort(a));

function quickSort(arr, start, end) {
   if (start < end) {
      let loc = partition(arr, start, end);
      quickSort(arr, start, loc);
      quickSort(arr, loc + 1, end);
   }
   return arr;
}

function partition(arr, start, end) {
   let pivot = arr[start];
   let locPivot = start;
   while (start < end) {
      while (arr[start] <= pivot) {
         start++;
      }
      while (arr[end] > pivot) {
         end--;
      }
      if (start < end) {
         let b = arr[end];
         arr[end] = arr[start];
         arr[start] = b;
      }
   }

   let y = arr[end];
   arr[end] = pivot;
   arr[locPivot] = y;

   return end;
}

let arr = [3, 5, 6, 22, 7, 1, 8, 9];
console.log(quickSort(arr, 0, arr.length - 1));

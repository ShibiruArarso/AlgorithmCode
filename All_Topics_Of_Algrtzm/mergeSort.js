function mergeSort(arr) {
   let leng = arr.length;
   if (leng == 1) {
      return arr;
   }
   let mid = Math.floor(leng / 2);
   let leftAr = mergeSort(arr.slice(0, mid));
   let rightAr = mergeSort(arr.slice(mid));

   return merge(leftAr, rightAr);
}

function merge(a, b) {
   let sorted = [];
   let i = 0;
   let j = 0;
   while (i < a.length && j < b.length) {
      if (a[i] < b[j]) {
         sorted.push(a[i]);
         i++;
      } else {
         sorted.push(b[j]);
         j++;
      }
   }
   while (i < a.length) {
      sorted.push(a[i]);
      i++;
   }
   while (j < b.length) {
      sorted.push(b[j]);
      j++;
   }
   return sorted;
}
let a = [4, 1, 0, 6, 3, 2, 19, 8];
console.log(mergeSort(a));

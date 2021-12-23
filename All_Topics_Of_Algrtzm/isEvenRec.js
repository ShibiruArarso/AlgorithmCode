function isEven(num) {
   if (num === 0) {
      return `Its even`;
   } else if (num === 1) {
      return `Its odd`;
   } else if (num > 0) {
      return isEven(num - 2);
   } else {
      return isEven(-num);
   }
}

console.log(isEven(-8));

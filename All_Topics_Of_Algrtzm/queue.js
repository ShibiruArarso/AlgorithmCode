class Quew {
   constructor() {
      this.arr = [];
   }

   push(value) {
      this.arr.push(value);
   }

   remove() {
      if (this.arr.length == 0) {
         return this.arrnull;
      } else {
         this.arr.shift();
      }
   }

   peek() {
      if (this.arr.length == 0) {
         return null;
      } else {
         return this.arr[0];
      }
   }
}

let q = new Quew();
q.push(1);
q.push(2);
q.push(3);
q.push(4);
q.push(5);
console.log(q.arr);
q.remove();
console.log(q.arr);
console.log(q.peek());

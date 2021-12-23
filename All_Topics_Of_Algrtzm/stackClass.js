class Stack {
   constructor() {
      this.stak = [];
   }
   push(value) {
      this.stak.push(value);
   }
   pop() {
      this.stak.pop();
   }
}

let list = new Stack();
list.push(1);
list.push(2);
list.push(3);
list.push(4);
console.log(list.stak);
list.pop();
console.log(list.stak);

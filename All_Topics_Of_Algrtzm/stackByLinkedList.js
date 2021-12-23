class Node {
   constructor(value) {
      this.value = value;
      this.next = null;
   }
}

class Stack {
   constructor() {
      this.first = null;
      this.last = null;
      this.length = 0;
   }
   push(value) {
      let newNode = new Node(value);
      if (this.length == 0) {
         this.first = this.last = newNode;
      } else {
         let temp = this.first;
         this.first = newNode;
         this.first.next = temp;
      }
      this.length++;
   }
   pop() {
      let removeN = this.first;
      if (this.length == 0) {
         return null;
      } else {
         this.first = this.first.next;
         removeN.next = null;
      }
      this.length--;
   }
}

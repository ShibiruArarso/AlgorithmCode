//! Just node
class Node {
   constructor(value) {
      this.value = value;
      this.next = null;
   }
}

//! This is singleLinkedList code
class SingleLinkedList {
   constructor() {
      this.head = null;
      this.tail = null;
      this.length = 0;
   }

   //! pushing method
   push(v) {
      let newNode = new Node(v);
      if (!this.head) {
         this.head = newNode;
         this.tail = this.head;
      } else {
         let oldTail = this.tail;
         this.tail = newNode;
         oldTail.next = this.tail;
      }
      this.length++;
   }
   //! Removing element from tail method
   pop() {
      if (this.head == null) {
         return null;
      } else {
         let currentNode = this.head;
         let secondToLastNode = this.head;

         while (currentNode.next != null) {
            secondToLastNode = currentNode;
            currentNode = currentNode.next;
         }

         secondToLastNode.next = null;
         this.tail = secondToLastNode;
         this.length--;
         if (this.length === 0) {
            this.head = null;
            this.tail = null;
         }
         return currentNode;
      }
   }
   //! remove from front element
   shift() {
      if (this.head == null) {
         return null;
      } else {
         const nodeToRemove = this.head;
         this.head = this.head.next;
         this.length--;

         //! if the List is empty now, there isn't a tail anymore
         if (this.head == null) {
            this.tail = null;
         }
      }
   }

   //! Add new Node at beginning.
   unshift(value) {
      const newNode = new Node(value);
      if (this.head == null) {
         this.tail = newNode;
      } else {
         newNode.next = this.head;
      }
      this.head = newNode;
      this.length++;
   }

   //! printing method
   print() {
      let curr = this.head;
      while (curr != null) {
         console.log(curr.value);
         curr = curr.next;
      }
      console.log(`Total length is ${this.length}`);
   }
}
//! creating obj from class of singlelinkedlist
let list = new SingleLinkedList();

//! Adding to lest or tail
list.push(1);
list.push(2);
list.push(3);
list.push(4);
list.push(5);

//! printing
list.print();
list.pop();
list.print();

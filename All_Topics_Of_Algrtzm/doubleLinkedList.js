class Node {
   constructor(value) {
      this.value = value;
      this.prev = null;
      this.next = null;
   }
}

class DoublyLinkedList {
   constructor() {
      this.head = null;
      this.tail = null;
      this.length = 0;
   }
   //!================ add at the end of list======================
   add(value) {
      let newNode = new Node(value);
      if (this.length == 0) {
         this.head = this.tail = newNode;
      } else {
         this.tail.next = newNode;
         newNode.prev = this.tail;
         this.tail = newNode;
      }
      this.length++;
      return this;
   }

   //!================ remove element from last=======================
   removeLast() {
      let removedNode = this.tail;
      if (this.length == 0) {
         return null;
      } else if (this.length === 1) {
         this.head = null;
         this.tail = null;
      } else {
         this.tail = this.tail.prev;
         this.tail.next = null;
         removedNode.prev = null;
      }
      this.length--;
      return removedNode;
   }

   //! ====================unshift or addAtBiginning================
   addAtBign(value) {
      let newNodeAtbign = new Node(value);
      if (this.length == 0) {
         this.head = this.tail = newNodeAtbign;
      } else {
         newNodeAtbign.next = this.head;
         this.head.prev = newNodeAtbign;
         this.head = newNodeAtbign;
      }
      this.length++;
      return newNodeAtbign;
   }
   //!================= shift or remove from beginning==================
   removeBign() {
      let removeFrontNode = this.head;
      if (this.length == 0) {
         return null;
      } else if (this.length == 1) {
         this.head = this.tail = null;
      } else {
         this.head = removeFrontNode.next;
         this.head.prev = null;
         removeFrontNode.next = null;
      }
      this.length--;
      return removeFrontNode;
   }
   getSpecificNode(index) {
      if (this.length <= 0 || index >= this.length) {
         return null;
      } else {
         let currentNode;
         if (index <= this.length / 2) {
            let counter = 1;
            currentNode = this.head;
            while (counter < index) {
               currentNode = currentNode.next;
               counter++;
            }
         } else {
            let counter = this.length;
            currentNode = this.tail;
            while (index < counter) {
               currentNode = currentNode.prev;
               counter--;
            }
         }
      }
      return currentNode;
   }
   //! update or change any node u like by its index
   updateSpecificNode(index, value) {
      const currentNode = this.getSpecificNode(index);
      if (currentNode) {
         currentNode.value = value;
      } else {
         return null;
      }
   }
   insertAtSpecificNode(index, value) {
      if (index < 0) {
         return null;
      } else if (index > this.length) {
         return null;
      } else if (index === 1) {
         return addAtBign(value);
      } else if (index === this.length) {
         return add(value);
      } else {
         let newNode = new Node(value);
         let newPrevNode = getSpecificNode(index - 1);
         let newNextNode = newPrevNode.next;
         newNode.prev = newPrevNode;
         newNode.next = newNextNode;
         newPrevNode.next = newNode;
         this.length++;
         return newNode;
      }
   }
}

let list = new DoublyLinkedList();
list.add(1);
list.add(2);
list.add(3);
list.add(4);
list.removeLast();
console.log(list);

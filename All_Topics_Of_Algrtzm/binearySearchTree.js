class Node {
   constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
   }
}

class BST {
   constructor() {
      this.root = null;
   }

   insert(inputValue) {
      let newNode = new Node(inputValue);
      if (this.root === null) {
         this.root = newNode;
         return this;
      } else {
         let currentNode = this.root;
         while (true) {
            if (inputValue === currentNode) {
               let alreadyInserted;
               return alreadyInserted;
            }
            if (inputValue < currentNode.value) {
               if (currentNode.left === null) {
                  currentNode.left = newNode;
                  return this;
               } else {
                  currentNode = current.left;
               }
            } else if (inputValue > currentNode) {
               if (currentNode.right === null) {
                  currentNode.right = newNode;
                  return this;
               } else {
                  currentNode = current.right;
               }
            }
         }
      }
   }
}

let tree = new BST();
tree.insert(50);
tree.insert(45);
tree.insert(55);
tree.insert(40);
tree.insert(60);
tree.insert(35);
console.log(tree);

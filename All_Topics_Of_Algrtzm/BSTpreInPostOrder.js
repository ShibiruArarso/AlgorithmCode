class Node {
   constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
   }
}

class BinarySearchTree {
   constructor() {
      this.root = null;
   }

   insertBST(input) {
      let newNode = new Node(input);
      if (this.root === null) {
         this.root = newNode;
         return this;
      } else {
         let currentNode = this.root;
         while (true) {
            if (input < currentNode.value) {
               if (currentNode.left === null) {
                  currentNode.left = newNode;
                  return this;
               } else {
                  currentNode = currentNode.left;
               }
            } else if (input > currentNode.value) {
               if (currentNode.right === null) {
                  currentNode.right = newNode;
                  return this;
               } else {
                  currentNode = currentNode.right;
               }
            }
         }
      }
   }

   find(inpt) {
      if (this.root === null) {
         return notExist;
      }
      let crnt = this.root,
         found = false;
      while (crnt && !found) {
         if (inpt < crnt.value) {
            crnt = crnt.left;
         } else if (inpt > crnt.value) {
            crnt = crnt.right;
         }
         found = true;
      }
      return crnt;
   }

   preOrderPrint(currentNode) {
      if (currentNode !== null) {
         console.log(currentNode.value);
         if (currentNode.left) {
            this.preOrderPrint(currentNode.left);
         }
         if (currentNode.right) {
            this.preOrderPrint(currentNode.right);
         }
      }
   }

   inOrderPrint(currentNode) {
      if (currentNode !== null) {
         if (currentNode.left) {
            this.inOrderPrint(currentNode.left);
         }
         console.log(currentNode.value);

         if (currentNode.right) {
            this.inOrderPrint(currentNode.right);
         }
      }
   }
   postOrderPrint(currentNode) {
      if (currentNode !== null) {
         if (currentNode.left) {
            this.inOrderPrint(currentNode.left);
         }

         if (currentNode.right) {
            this.inOrderPrint(currentNode.right);
         }

         console.log(currentNode.value);
      }
   }
   delete(key) {
      function removeNode(root, key) {
         //! Empty tree return false;
         if (root === null) {
            return null;
         }
         if (key < root.value) {
            removeNode(root.left, key);
         } else if (key > root.value) {
            removeNode(root.right, key);
         }
         if (key == root.value) {
            //! (!root.left) is the same as (root.left== null)
            if (root.left == null && root.right == null) {
               root = null;
               return root;
            }
            if (!root.left) {
               return root.right;
            }
            if (!root.right) {
               return root.left;
            }

            let temp = root.right;
            while (temp.left != null) {
               temp = temp.left;
            }
            root.value = temp.value;

            root.right = removeNode(root.right, temp.value);
         }
      }

      removeNode(this.root, key);
   }
}

var BST = new BinarySearchTree();

BST.insertBST(6);
BST.insertBST(4);
BST.insertBST(9);
BST.insertBST(5);
BST.insertBST(2);
BST.insertBST(8);
BST.insertBST(12);
BST.insertBST(1);
BST.insertBST(3);

BST.delete(9);
BST.preOrderPrint(BST.root);

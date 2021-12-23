class Node {
   constructor(value, priority) {
      this.value = value;
      this.priority = priority;
   }
}

class priorityQueue {
   constructor() {
      this.data = [];
   }
   insert(value, priority) {
      let newNode = new Node(value, priority);
      this.data.push(newNode);
      //! insert highy priority from top to down sequencially mrthod👇
      this.bubbleUpMax();
   }
   bubbleUpMax() {
      let idxOfchild = this.data.length - 1;
      let newElmnt = this.data[idxOfchild];
      while (idxOfchild > 0) {
         let parentIdx = Math.floor((idxOfchild - 1) / 2);
         let parent = this.data[parentIdx];
         if (newElmnt.priority <= parent.priority) {
            break;
         } else {
            this.data[parentIdx] = newElmnt;
            this.data[idxOfchild] = parent;
            idxOfchild = parentIdx;
         }
      }
   }

   removeHeap() {
      let max = this.data[0];
      let end = this.data.pop();

      this.data[0] = end;
      this.swapDownNewWrongMax();
   }
   swapDownNewWrongMax() {
      let idx = 0;
      let lengthOfArray = this.data.length;
      let upperElmnt = this.data[idx];
      while (true) {
         //! formula of getting left and right index of parent
         let leftChldIdx = 2 * idx + 1;
         let rightChldIdx = 2 * idx + 2;
         let leftChild, rightChild;
         let swap = null;
         if (leftChldIdx < lengthOfArray) {
            leftChild = this.data[leftChldIdx];
            if (upperElmnt.priority < leftChild.priority) {
               swap = leftChldIdx;
            }
         }
         if (rightChldIdx < lengthOfArray) {
            rightChild = this.data[rightChldIdx];
            if (
               (swap === null && upperElmnt.priority < rightChild.priority) ||
               (swap !== null && rightChild.priority > leftChild.priority)
            ) {
               swap = rightChldIdx;
            }
         }
         if (swap === null) break;
         this.data[idx] = this.data[swap];
         this.data[swap] = upperElmnt;
         idx = swap;
      }
   }
}

let heap = new priorityQueue();
heap.insert("Gun shoot", 5);
heap.insert("cough", 1);
heap.insert("fever", 3);
heap.insert("Headche", 2);
heap.insert("Arm break", 4);

console.log(heap.data);

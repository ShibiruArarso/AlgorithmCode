class BothMaxMinBinaryHeap {
   constructor() {
      this.data = [];
   }
   insert(value) {
      this.data.push(value);
      //! when open this MaxHeap work👇
      this.bubbleUpMax();
      //! when open this MinHeap work👇
      //   this.bubbleDownMin();
   }
   bubbleUpMax() {
      let idxOfchild = this.data.length - 1;
      let newElmnt = this.data[idxOfchild];
      while (idxOfchild > 0) {
         let parentIdx = Math.floor((idxOfchild - 1) / 2);
         let parent = this.data[parentIdx];
         if (newElmnt <= parent) {
            break;
         } else {
            this.data[parentIdx] = newElmnt;
            this.data[idxOfchild] = parent;
            idxOfchild = parentIdx;
         }
      }
   }
   bubbleDownMin() {
      let idxOfchild = this.data.length - 1;
      let newElmnt = this.data[idxOfchild];
      while (idxOfchild > 0) {
         let parentIdx = Math.floor((idxOfchild - 1) / 2);
         let parent = this.data[parentIdx];
         if (newElmnt >= parent) {
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
            if (upperElmnt < leftChild) {
               swap = leftChldIdx;
            }
         }
         if (rightChldIdx < lengthOfArray) {
            rightChild = this.data[rightChldIdx];
            if (
               (swap === null && upperElmnt < rightChild) ||
               (swap !== null && rightChild > leftChild)
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

let heap = new BothMaxMinBinaryHeap();
heap.insert(8);
heap.insert(28);
heap.insert(30);
heap.insert(21);
heap.insert(25);
heap.insert(16);
heap.insert(23);
console.log(heap.data);

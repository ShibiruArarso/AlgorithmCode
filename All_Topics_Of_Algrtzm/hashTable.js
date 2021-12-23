class HashTable {
   constructor() {
      this.size = 10;
      this.buckets = new Array(this.size);
   }
   hashFunc(key) {
      let hashcode = 0;
      for (let i = 0; i < key.length; i++) {
         hashcode += key.charCodeAt(i);
      }
      let hashValue = hashcode % this.size;
      return hashValue;
   }
   set(key, value) {
      let index = this.hashFunc(key);
      if (!this.buckets[index]) {
         this.buckets[index] = [];
      }
      this.buckets[index].push([key, value]);
   }
   get(key) {
      let index = this.hashFunc(key);
      if (this.buckets[index]) {
         for (let i = 0; i < this.buckets[index].length; i++) {
            if (this.buckets[index][i][0] === key) {
               return this.buckets[index][i][1];
            }
         }
      }
      return undefined;
   }
}

let ht = new HashTable();
ht.set("red", "Dima");
ht.set("black", "Guracha");
ht.set("blue", "samawi");
ht.set("white", "Adi");

let name = "Shibiru";

function reverse(str) {
   let newN = "";
   for (let i = str.length - 1; i >= 0; i--) {
      newN += str[i];
   }
   return newN;
}

console.log(reverse(name));

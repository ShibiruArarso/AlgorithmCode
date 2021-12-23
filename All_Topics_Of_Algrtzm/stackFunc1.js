let stack = [];
function push(value) {
   stack.push(value);
}
function pop() {
   stack.pop();
}

push(1);
push(2);
push(3);
push(4);
push(5);
push(6);
console.log(stack);
pop();
console.log(stack);
console.log(stack);
console.log(stack);
pop();
pop();
console.log(stack);

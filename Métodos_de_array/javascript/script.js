//lenght

var arr = [1,2,3,4,5,6,"oi"];

console.log(arr.length);

//push

arr.push(7);
arr.push("qualquer coisa");

console.log(arr);

//pop
arr.pop();

console.log(arr);

//unshift

arr.unshift(0);
arr.unshift("agora");

console.log(arr);

//shift

arr.shift();

console.log(arr);

//acessar o último elemento

console.log(arr[arr.length - 1]);

//isArray

console.log(Array.isArray(5));
console.log(Array.isArray(arr));

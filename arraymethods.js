let vegetables=["carrot","radish","cauliflower","cabbage"];

//tostring() and Join()

console.log(vegetables);
console.log(vegetables.toString());
console.log(vegetables.join());
console.log(vegetables.join("-"));// passing value can separate elements

//pop()
console.log(vegetables.pop()); // remove element from array at last position and print it in console
console.log(vegetables);

//push()

console.log(vegetables.push("Ladiesfinger")); //insert element at last position in array before that return length of an array
console.log(vegetables);

//shift()
console.log(vegetables.shift());// remove first element in an array and print it in console
console.log(vegetables);

//unshift()

console.log(vegetables.unshift("Potato"));//insert elmenet into first posiiton and returns length
console.log(vegetables);

//deleting elements from array
delete vegetables[2];
console.log(vegetables);
console.log(vegetables.length);
console.log(vegetables[2]);

//concat - joining/merging 2or more arrays
let arr=[10,20];
let arr1=[30,40,50];
let arr2=["A","B","C"];
console.log(arr1.concat(arr2)); //merging two arrays

console.log(arr.concat(arr1,arr2));// merging 3 or more arrays

//slice()
let fruits=["Lemon","Apple","Orange","mango","banana"];
console.log(fruits);

console.log( fruits.slice(1));//[ 'Apple', 'Orange', 'mango', 'banana' ]
console.log(fruits);

//sort()

console.log(fruits.sort());
let arr3=[30,40,50,80,40,20,40,-52,60,-60,75,12,2,56,19];
console.log(arr3.sort()); 

//reverse()
console.log(fruits);
console.log(fruits.reverse());














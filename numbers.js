let x=1000;

let y=new Number(100);

console.log(x);
console.log(y);

let a=100;   // int value
let b=100.66;  // decimal val
let c=10e2;  // exponential value
let d="52";
console.log(a);
console.log(b);
console.log(c);

//isInteger()
console.log(Number.isInteger(a));
console.log(Number.isInteger(b));
console.log(Number.isInteger(c));
console.log(Number.isInteger(d));

//parseInt()   convert string to integer
s="123456";
console.log(s);
console.log(typeof(s));
console.log(Number.isInteger(s));
console.log(Number.parseInt(s));
console.log(typeof(Number.parseInt(s)));
console.log(Number.isInteger(Number.parseInt(s)));

//parseFloat() convert float into integer
s="123.456";
console.log(s);
console.log(typeof(s));
console.log(Number.isInteger(s));
console.log(Number.parseInt(s));
console.log(typeof(Number.parseInt(s)));
console.log(Number.isInteger(Number.parseInt(s)));

//toString()  convert number to string
let num=1234;

console.log(typeof(num));
console.log(typeof(num.toString()));








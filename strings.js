let s="welcome";
let st=new String("Hello");

console.log(s);
console.log(st);

//charAt()
console.log(s.charAt(5));

//concat()

console.log(s.concat(st));
console.log(s.concat(st).concat(" to the world"));

//replace()
s="Welocme To Javascript";
console.log(s);
console.log(s.replace("javascript","java"));

//substring() 

console.log(s.substring(8));
console.log(s.substring(0,7));

//toLowercase() toUppercase()

console.log(s.toLowerCase());
console.log(s.toLocaleLowerCase());

console.log(s.toUpperCase());
console.log(s.toLocaleUpperCase());

//split()
let arr=s.split(" ");
console.log(arr[2]);
console.log(s.split(" "));

//trim()
s="        HelloWorld!!!    "
console.log(s.trim());










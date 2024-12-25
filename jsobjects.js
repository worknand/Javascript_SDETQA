let person=
{
    firstName:"Nanda",
    lastName:"Kumar",
    age:30,
    weight:120
}

// Accessing object properties
console.log(person["firstName"]);  //one way
console.log(person.age);    // another way

// add New properties to existing object
person["height"]=5.5;  // one way
person.hobby="Coding";  // another way

console.log(person.height);
console.log(person.hobby);

// update existing properties
person["weight"]=100;
person.age=35;
console.log(person.weight);
console.log(person.age);

// remove properties from existing object
delete person.age;
console.log(person.age);

//for/in loop to iterate each properties from object
console.log("***** looping object *********");
for (let x in person) {
   console.log(x);  // print only properties name
   
   
}
console.log("****** properties values ******");
for (let x in person) {
   console.log(person[x]); //print only values of properties
}

console.log("****** properties and  values combination ******");
for (let x in person) {
   console.log(x +" "+ person[x]); //print combinations
}





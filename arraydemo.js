let cars=["BMW","Audi","Skoda"];

let car=new Array("BMW","Audi","Skoda");

console.log(cars);
console.log(car);
console.log(car[2]); // accessing particular element

car[0]="RollsRoyce";
console.log(car);


// can have different datatypes in the same array
let myarray=[100,"Hello",false,10.50];
console.log(myarray);

//can have objects in the same array
let person1={
    name:"Nanda",
    age:30
};

let person2={
    name:"Kumar",
    age:20
};

let person3={
    name:"Revathy",
    age:60
};

let objarray=[person1,person2,person3];
console.log(objarray);
console.log(objarray[1]);

let vegetables=["carrot","radish","cauliflower","cabbage"];
console.log(vegetables.length);

console.log(vegetables);

//looping elements from array
for (let index = 0; index < vegetables.length; index++) {
    console.log(vegetables[index]);
      
}

// looping elements from array using for/of loop
// for (  element of vegetables) {
//     console.log(element);
    
// }

for ( let element of vegetables) {
    console.log(element);
    
}

//recogniza an array - type of

console.log(typeof vegetables);
console.log(typeof objarray);
console.log(typeof myarray);
console.log(typeof cars);
console.log(typeof car);

// ro confirm is it array

console.log( Array.isArray(vegetables));







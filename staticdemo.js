class test{



    static a=10;  // static variable
    b=10;         // non-static variable



   static m1(){
        console.log("This is M1");
        
    }

    m2(){
        console.log("This is m2");
        
    }
}

let obj=new test();
let object=new test();

// we can directly access static method and variables using classname
// we can directly access non static method and variables using object 
console.log(test.a);
console.log(obj.b);           //undefined
test.m1();
obj.m2();
console.log(object.b);
object.m2();


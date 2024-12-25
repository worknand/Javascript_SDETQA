class Shape{

    draw(){
        return "hi hello";
    }
}

class Square extends Shape {
    draw(){
        return "i am from square class";
}
}

class Circle extends Shape{
    draw(){
        return "i am circle";
    }
}

let s=new Shape();
console.log(s.draw());

s=new Square();
console.log(s.draw());

s=new Circle();
console.log(s.draw());



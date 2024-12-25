class Employee{


    constructor(eid,ename){
        this.id=eid;
        this.name=ename;
    }
}

Employee.prototype.age=30;

Employee.prototype.display=function()
{
    console.log(this.id,this.name,this.age);
}


let emp=new Employee(100,"Nanda");
console.log(emp.id,emp.name,emp.age);


let emp1=new Employee(101,"Kumar");
console.log(emp1.id,emp1.name,emp1.age);

emp.display();
emp1.display();

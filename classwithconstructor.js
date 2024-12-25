class Student{

    constructor(sid,sname,roll){

        this.sid=sid;
        this.sname=sname;
        this.roll=roll;
    }

    display() {
        console.log(this.roll,this.sid,this.sname);
        
    }
    

}
let stu=new Student(100,"Nanda",10);
    stu.display();


class Student{

    setDetails(sid,sname,roll){

        this.sid=sid;
        this.sname=sname;
        this.roll=roll;
    }

    display() {
        console.log(this.roll,this.sid,this.sname);
        
    }
    

}
let stu=new Student();
    stu.setDetails(100,"Nanda",10);
    stu.display();
    stu.setDetails(101,"Kumar",11);
    stu.display();


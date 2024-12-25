function student()
{
this.name="Nanda";
this.gender="M";
}
student.prototype.age=30; /// common for all objects

stu=new student();

console.log(stu.name);
console.log(stu.gender);

//stu.age=30;
console.log(stu.age);

stu1=new student();
console.log(stu1.name, stu1.gender, stu1.age);




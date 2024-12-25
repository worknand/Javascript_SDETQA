let employee={
    empname:"Nanda",
    empid:1000,
    desination:"Engineer",
    basicpay:100000,
    bonus: function () {
       return (this.basicpay*.1);
    }
}; // object should end with semicolon
console.log(employee.bonus());
console.log(employee.empid);

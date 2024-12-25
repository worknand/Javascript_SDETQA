let text='{"employees" :['+
'{"firstname" :"Nanda", "lastname" :"Doe"},'+
'{"firstname" :"Simbu", "lastname" :"TR"},'+
'{"firstname" :"CSK", "lastname" :"RCB"}]}';


let obj=JSON.parse(text);
console.log( obj.employees[1].firstname);
console.log( obj.employees[2].lastname);



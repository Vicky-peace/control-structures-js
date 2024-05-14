// DATE OBJECT

let date = new Date();
console.log(date);


// Date methods
console.log(date.getDate());
console.log(date.getFullYear());
console.log(date.getMonth());
console.log(date.getTimezoneOffset());
console.log(date.getHours());
console.log(date.getTime());


//date formats
console.log(date.toDateString());
console.log(date.toLocaleDateString());
console.log(date.toTimeString());
console.log(date.toUTCString());


const [hours, minutes, seconds] =[
   date.getHours(),
   date.getMinutes(),
   date.getSeconds(),
];
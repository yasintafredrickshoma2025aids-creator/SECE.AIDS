console.log("Hello Yasinta");
var x=10;
var x=20;

let a=30
a="hello"
const b =40;
console.log(typeof a);
let c =22
{
    let c =30
}
console.log(c);
let obj={
   
   name:"test",
   age:30
}
let obj2 =obj
obj2.age =36
console.log(obj.age);
console.log(5===5);
function add(a,b){
    return a+b;
}
function sub(a,b){
    return a-b;
}


const  add1=(x,y,z)=>{
    return x+y+z;
}
console.log(add1(3,3,4));
const cal=(a,b,callback)=>{
    return callback(a,b);
}
console.log(cal(6,8,add));
console.log(cal(6,8,sub));
let arr =[1,2,3,4]

const dobleArr=arr.map((n)=>{return n*2})
console.log(dobleArr);
const evenNum=arr.filter((n)=>{return n%2==0})
console.log(evenNum);
const FindNum=arr.find((n)=>{return n>2})
console.log(FindNum);
let details=[
    {name:"A",mark:90},
    {name:"B",mark:80},
    {name:"C",mark:70},
    {name:"D",mark:60}
]
const lessValue=details.filter((detail)=>detail.mark<=80)
console.log(lessValue);
const nameList=details.map((detail)=>detail.mark)
console.log(nameList); 
let name ="shoma"
let mark = 95
console.log(`I am ${name} have scored ${mark}`)

function displayInput() {
    const inputValue = document.getElementById("input").value;
    document.getElementById("output").textContent = inputValue;
}
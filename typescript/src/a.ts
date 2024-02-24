let x:number = 1;
console.log(x);
function greet(firstName:string){
    console.log("Hello " + firstName);
}
greet("dshdjh")

function sum(a:number, b:number): number{
    return a + b;
    // return "dslkcjfh"
}
// function isLegal(age:number){
//     return (age > 18);
// }

function runAfter1sec(fn: () => void){
    setTimeout(fn,1000)
}
const value =sum(1,2);
console.log(value);
interface User {
	firstName: string;
	lastName: string;
	email?: string;
	age: number;
}
function isLegal(user : User){
    console.log(user);
}
isLegal({
    firstName : "adhjhd",
    lastName : "sdklsd",
    // email : "dskjds", -> optional
    age : 272
})

interface Person {
    user : string,
    age : number,
    greet(name:string):void,
}
// class Manager implements Person{

// }
type User2 = {
    firstName : string,
    lastName : string,
    age : number,
}

type MyWork1 = {
    time : Date,
}
interface MyWork2 {
    name : String,
}

type doSomething = MyWork1 & MyWork2

// // console.log("bye");
// // console.log(a);
// //partially runs
// let a = 1;
// a = 2;
// console.log(a);
// let firstName = "Zaid";
// console.log("this person's name is" + firstName + "yay....");

// let person2 = "Hey";

// const allUsers = [
//   {
//     firstName: "Zaid",
//     gender: "male",
//   },
//   {
//     firstName: "Anas",
//     gender: "male",
//   },
// ];

// for (let i = 0; i < allUsers.length; i++) {
//   if (allUsers[i]["gender"] == "male") {
//     console.log(allUsers[i]["firstName"]);
//   }
// }

// function sum(a, b) {
//   return a + b;
// }
// console.log(sum(1, 2));

let sum = 0;
for (let i = 0; i < 10000000000000; i++) {
  sum = sum + i;
}
console.log(sum);

function sum(a, b, fnToCall) {
  ans = a + b;
  fnToCall(ans);
}

function display(ans) {
  console.log("Bye", ans);
}

function display2(ans) {
  console.log("Hello", ans);
}

// callback
sum(1, 2, display);

setTimeout(() => {
  console.log("Hello");
}, 10000);

// setTimeout(fn,time){

// }

// "ABC".slice(0, 5);


// objects

const profile = {
  username: "Karan Roushan",
  nickname: null,
  posts: 0,
  followers: 97,
  following: 278,
  profession: "full stack developer",
};

console.log(typeof profile["profession"]);

//difference between == & ===

const a = 9;
const b = "9";

console.log("a == b", a == b); //true because it only checks values inside,
console.log("a === b", a === b); //it is more strict, false because it check even datatype

//conditional statements

const num = 11;

if (num % 2 === 0) {
  console.log("even");
} else {
  console.log("odd");
}

//practice

let number = prompt("enter a number");

if (number % 5 === 0) {
  console.log(number, "is multiple of 5");
} else {
  console.log(number, "is not a multiple.");
}


let score = prompt("enter your score");
let grade ;
if (score>= 90 && score <= 100) {
  grade = "A";
}else if(score >= 70 && score <= 89){
  grade = "B";
}else if(score >= 60 && score <= 69){
  grade = "C";
}else if(score >= 50 && score <= 59){
  grade = "D";
}else if(score >= 0 && score <= 49){
  grade = "F";
}

console.log(grade)

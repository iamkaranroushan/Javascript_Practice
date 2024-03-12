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


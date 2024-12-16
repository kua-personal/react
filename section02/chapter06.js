// 1. 배열 순회
let arr = [1, 2, 3,]

// 1. 배열 인덱스
for (let i=0; i < arr.length; i++) {
  // console.log(arr[i]);
}

for (let i of arr) {
  // console.log(i);
}

// 2. 객체순회
let person = {
  name: "John",
  age: 34,
  hobby: "Soccer",
}

// 2.1. Object.keys
let keys = Object.keys(person);

for (let key of keys) {
  // console.log(key, person[key]);
  const value = person[key];
  // console.log(key, value);
}

// 2.2 Object.values
let values = Object.values(person);
// console.log(values);

for (let value of values) {
  // console.log(value);
}

// 2.3. for in
for (let key in person) {
  console.log(key, person[key]);
}
// 1. Spread 연산자

let arr1 = [1, 2, 3];
let arr2 = [4, ...arr1, 5, 6];

let obj1 = {
  a: 1,
  b: 2,
};

let obj2 = {
  ...obj1,
  c: 3,
  d: 4,
};

function funcA(p1, p2, p3) {
  console.log(p1, p2, p3);
}

funcA(...arr1)

// 2. Rest 매개변수
function funcB(one, two, ...rest) {
  console.log(rest)
}

funcB(...arr1)
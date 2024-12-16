function add10(num) {
  const promise = new Promise((resolve, reject) => {
    // 비동기 작업 실행하는 함수 (executor)

    setTimeout(() => {
      if (typeof num === "number") {
        resolve(num + 10);
      } else {
        reject("num is not a number");
      }
    }, 1999);
  });

  return promise;
}

const p = add10(0);
p.then((result) => {
  console.log(result);
  return add10(result);
}).then((result2) => {
  console.log(result2);
  return add10(result2);
}).then((result3) => {
  console.log(result3);
}).catch((e) => {
  console.error(e);
});

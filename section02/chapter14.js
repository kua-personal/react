// async

async function getData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        name: "홍길동",
        id: "user1234"
      })
    }, 1000);
  })
}

// await
async function printData() {
  const data = await getData()
  console.log(data)
}

printData()
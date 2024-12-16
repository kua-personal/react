// 1. filter
let arr1 = [
  {name: "홍길동", hobby: "요리"},
  {name: "김철수", hobby: "운동"},
  {name: "이영희", hobby: "요리"},
]

const cookingPeople = arr1.filter((person)=>person.hobby === "요리")
// console.log(cookingPeople)

// 2. map
let arr2 = [1, 2, 3]
const mapResult = arr2.map((item, idx, arr)=> {
  return item * 2
})
// console.log(mapResult)

let names = arr1.map((item) => item.name)
// console.log(names)

// 3. sort
let arr3 = [10, 3, 5]
arr3.sort((a,b)=>{
  if (a > b) {
    // b가 a 앞에 와라
    return 1
  } else if (a < b) {
    // a가 b 앞에 와라
    return -1
  } else {
    // 두 값의 자리를 바꾸지 마라
    return 0
  }
})

// console.log(arr3)

// 4. toSorted
let arr5 = ["c", "a", "b"]
const sortedArr = arr5.toSorted()
// console.log(arr5)
// console.log(sortedArr)

// 5. join
let arr6 = ["hi", "im", "jane"]
const joined = arr6.join(" ")
// console.log(joined)
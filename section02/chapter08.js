// 1. forEach
let arr1 = [1, 2, 3]

arr1.forEach(function (item, idx, arr) {
  // console.log(idx, item * 2)
})

let doubledArr = []

arr1.forEach((item)=>{
  doubledArr.push(item * 2)
})

// 2. includes
let arr2 = [1, 2, 3]
let isInclude = arr2.includes(3)
// console.log(isInclude)

// 3. indexOf

let objectArr = [
  {id: 1, name: "John"},
  {id: 2, name: "Jane"},
  {id: 3, name: "Tom"},
]

// cant find it
// console.log(
//   objectArr.indexOf({id: 2, name: "Jane"})
// )

// 4. findIndex
let arr4 = [1, 2, 3]
// const findedIndex = arr4.findIndex((item)=>{
//   // if (item === 2) return true
//   if (item % 2 !== 0) return true
// })
const findedIndex = arr4.findIndex((item)=>item % 2 !== 0)
// console.log(findedIndex)
// console.log(
  // objectArr.findIndex((item)=>item.id === 2)
// )

// 5. find
let arr5 = [
  {id: 1, name: "John"},
  {id: 2, name: "Jane"},
  {id: 3, name: "Tom"},
]

const finded = arr5.find((item)=>item.name === "John")
// console.log(finded)
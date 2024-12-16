let arr = [1,2,3]

let [one, two, three, four = 4] = arr;

let person = {
  name: "홍길동",
  age: 23,
  hobby: "게임"
}

let { name, age, hobby, extra = "hello" } = person;

const func = ({name, age, hobby, extra}) => {
  console.log(name, age, hobby, extra)
}

func(person)
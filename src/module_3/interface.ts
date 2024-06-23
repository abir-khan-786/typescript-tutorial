type User = {
  name: string
  age: number
}

interface IUser {
  name: string
  age: number
}

type addNumberType = (num1: number, num2: number) => number

const addNumber: addNumberType = (num1, num2) => num1 + num2

// generic interface
interface CrushInterFace<T, w> {
  name: string
  hasbend: T
  wife: w
}
interface IhasbendName {
  name: string
  age: number
  salary: number
}
const crush1: CrushInterFace<boolean, string> = {
  name: 'moni',
  hasbend: true,
  wife: 'moni akter',
}
const crush2: CrushInterFace<string, number> = {
  name: 'moni',
  hasbend: 'abir',
  wife: 5,
}

const crush3: CrushInterFace<IhasbendName, boolean> = {
  name: 'moni',
  hasbend: { name: 'abir', age: 25, salary: 10000 },
  wife: false,
}

console.log(crush1, crush2)

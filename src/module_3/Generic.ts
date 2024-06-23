type GenericType<T> = Array<T>

const rollNumbers: GenericType<number> = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const rollNumbers2: GenericType<string> = [
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  '10',
]

type GenericTupleType<T, U> = [T, U]
type GenericTypestple = {
  name: string
  age: number
}

const relation1: GenericTupleType<string, string> = ['abir Khan', 'moni akter']

const relation2: GenericTupleType<GenericTypestple, string> = [
  { name: 'abir Khan', age: 25 },
  'moni akter',
]

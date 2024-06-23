const createArray = (parm: string): Array<string> => {
  return [parm]
}

const createArray1 = <T>(parm: T): T[] => {
  return [parm]
}
const result1 = createArray('bansadf')

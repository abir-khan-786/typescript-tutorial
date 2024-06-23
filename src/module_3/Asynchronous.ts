const makePromise = (): Promise<string> => {
  return new Promise<string>((resolve, rejects) => {
    const data: string = 'data is fetched'

    if (data) {
      resolve(data)
    } else {
      rejects(' failed to fetch data')
    }
  })
}

const getPromiseData = async (): Promise<string> => {
  const data = await makePromise()
  return data
}

// json placeholder api
interface ITodo {
  userId: number
  id: number
  title: string
  completed: boolean
}

const getTodo = async (): Promise<ITodo> => {
  const res = 'https://jsonplaceholder.typicode.com/todos/1'
  const data = await fetch(res)
  return await data.json()
}

const getTodoData = async (): Promise<void> => {
  const data = await getTodo()
  console.log(data)
}

getTodoData()

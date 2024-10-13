import { db } from '../configs/db.ts'

export const createTask = (name: string, icon: string) => {
  try {
    db.query('INSERT INTO tasks (name, icon) VALUES (?, ?)', [name, icon])
    console.log('Task created')
  } catch (error) {
    console.log(error)
    return error
  }
}

export const getTasks = () => {
  const result = db.query('SELECT * FROM tasks ORDER BY id DESC')
  return result.map((task) => {
    return {
      id: task[0],
      name: task[1],
      icon: task[2],
      status: task[4],
    }
  })
}

export const getTaskById = (id: string) => {
  const result = db.query('SELECT * FROM tasks WHERE id = ?', [id])
  return result
}

export const deleteTask = (id: string) => {
  db.query('DELETE FROM tasks WHERE id = ?', [id])
}

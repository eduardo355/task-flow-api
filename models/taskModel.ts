import { db } from '../configs/db.ts'

export const createTask = (name: string, icon: string) => {
  db.query('INSERT INTO tasks (name, icon) VALUES (?, ?)', [name, icon])
}

export const getTasks = () => {
  const result = db.query('SELECT * FROM tasks')
  return result
}

export const getTaskById = (id: string) => {
  const result = db.query('SELECT * FROM tasks WHERE id = ?', [id])
  return result
}

export const deleteTask = (id: string) => {
  db.query('DELETE FROM tasks WHERE id = ?', [id])
}

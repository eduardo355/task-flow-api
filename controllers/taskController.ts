import {
  createTask,
  deleteTask,
  getTaskById,
  getTasks,
} from '../models/taskModel.ts'

export const insertTask = (name: string, icon: string) => {
  if (!name || !icon) {
    return 'Name and icon are required'
  }
  try {
    createTask(name, icon)
  } catch (error) {
    return error
  }
}

export const consultTask = () => {
  try {
    const tasks = getTasks()
    return tasks
  } catch (error) {
    return error
  }
}

export const consultTaskById = (id: string) => {
  try {
    const result = getTaskById(id)
    return result
  } catch (error) {
    return error
  }
}

export const removeTask = (id: string) => {
  try {
    deleteTask(id)
  } catch (error) {
    return error
  }
}

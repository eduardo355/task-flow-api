import {
  deleteSubTask,
  getSubTaskById,
  getSubTasks,
  postSubTask,
} from '../models/subTasksModel.ts'

export const createSubTask = (
  taskId: string,
  name: string,
  description: string
) => {
  try {
    postSubTask(taskId, name, description)
  } catch (error) {
    return error
  }
}

export const consultSubTasks = () => {
  try {
    return getSubTasks()
  } catch (error) {
    return error
  }
}

export const consultSubTaskById = (id: string) => {
  try {
    return getSubTaskById(id)
  } catch (error) {
    return error
  }
}

export const removeSubTask = (id: string) => {
  try {
    deleteSubTask(id)
  } catch (error) {
    return error
  }
}

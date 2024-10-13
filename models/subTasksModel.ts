import { db } from '../configs/db.ts'

export const postSubTask = (
  taskId: string,
  name: string,
  description: string
) => {
  db.query(
    'INSERT INTO subtasks (task_id, name, description) VALUES (?, ?, ?)',
    [taskId, name, description]
  )
}

export const getSubTasks = () => {
  const rows = db.query(`
    SELECT subtasks.*, tasks.name AS task_name, tasks.status AS task_status
    FROM subtasks
    INNER JOIN tasks ON subtasks.task_id = tasks.id
  `)
  return rows.map((row) => ({
    id: row[0],
    task_id: row[1],
    name: row[2],
    description: row[3],
    due_date: row[4],
    subtask_status: row[5],
    task: {
      task_name: row[6],
      task_status: row[7],
    },
  }))
}

export const getSubTaskById = (id: string) => {
  const rows = db.query(
    `
    SELECT subtasks.*, tasks.name AS task_name, tasks.status AS task_status
    FROM subtasks
    INNER JOIN tasks ON subtasks.task_id = tasks.id
    WHERE subtasks.id = ?`,
    [id]
  )
  return rows.map((row) => ({
    id: row[0],
    task_id: row[1],
    name: row[2],
    description: row[3],
    due_date: row[4],
    subtask_status: row[5],
    task: {
      task_name: row[6],
      task_status: row[7],
    },
  }))[0]
}

export const deleteSubTask = (id: string) => {
  db.query('DELETE FROM subtasks WHERE id = ?', [id])
}

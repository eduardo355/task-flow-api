import express, { Request, Response } from 'npm:express@4.18.2'
import {
  consultSubTaskById,
  consultSubTasks,
  createSubTask,
  removeSubTask,
} from '../controllers/subTasksController.ts'

const router = express.Router()

router.post('/', (req: Request, res: Response) => {
  const { taskId, name, description } = req.body
  createSubTask(taskId, name, description)
  res.send(true)
})

router.get('/', (_req: Request, res: Response) => {
  const result = consultSubTasks()
  return res.send(result)
})

router.get('/:id', (req: Request, res: Response) => {
  const { id } = req.params
  const result = consultSubTaskById(id)
  return res.send(result)
})

router.delete('/:id', (req: Request, res: Response) => {
  const { id } = req.params
  removeSubTask(id)
  return res.send(true)
})

export default router

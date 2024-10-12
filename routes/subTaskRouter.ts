import express, { Request, Response } from 'npm:express@4.18.2'
import {
  consultSubTasks,
  createSubTask,
} from '../controllers/subTasksController.ts'

const router = express.Router()

router.post('/', (req: Request, res: Response) => {
  const { taskId, name, description } = req.body
  createSubTask(taskId, name, description)
  res.send(true)
})

router.get('/', (_req: Request, res: Response) => {
  const result = consultSubTasks()
  const parse = JSON.parse(JSON.stringify(result))
  return res.send(parse)
})

export default router

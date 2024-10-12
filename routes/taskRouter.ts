import express, { Request, Response } from 'npm:express@4.18.2'
import {
  consultTask,
  consultTaskById,
  insertTask,
  removeTask,
} from '../controllers/taskController.ts'

const router = express.Router()

router.get('/', (_req: Request, res: Response) => {
  const result = consultTask()
  res.send(result)
})

router.post('/', (req: Request, res: Response) => {
  const { name, icon } = req.body
  insertTask(name, icon)
  res.send(true)
})

router.get('/:id', (req: Request, res: Response) => {
  const { id } = req.params
  const result = consultTaskById(id)
  res.send(result)
})

router.delete('/:id', (req: Request, res: Response) => {
  const { id } = req.params
  removeTask(id)
  res.send(true)
})

export default router

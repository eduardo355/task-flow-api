import express, { Request, Response } from 'npm:express@4.18.2'
import {
  consultTask,
  consultTaskById,
  insertTask,
  removeTask,
} from '../controllers/taskController.ts'

const router = express.Router()

router.get('/', (_req: Request, res: Response) => {
  try {
    const result = consultTask()
    console.log(result)
    return res.json(result)
  } catch (error) {
    console.log(error)
  }
})

router.post('/', (req: Request, res: Response) => {
  try {
    const { name, icon } = req.body
    insertTask(name, icon)
    res.send(true)
  } catch (error) {
    console.log(error)
  }
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

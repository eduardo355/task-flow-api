// @deno-types="npm:@types/express@4.17.15"
import express from 'npm:express@4.18.2'
import { createTables } from './configs/createTables.ts'
import taskRouter from './routes/taskRouter.ts'
import subTasks from './routes/subTaskRouter.ts'
import { oakCors } from 'https://deno.land/x/cors@v1.2.2/mod.ts'

const app = express()
createTables()

app.use(express.json())
app.use('/api/tasks', taskRouter)
app.use('/api/subtasks', subTasks)

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000')
})

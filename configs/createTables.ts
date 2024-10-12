import { db } from './db.ts'

export const createTables = () => {
  db.execute(
    `CREATE TABLE IF NOT EXISTS tasks (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        icon TEXT,
        due_date TEXT DEFAULT (datetime('now')),
        status TEXT CHECK (status IN ('not started', 'in progress', 'completed')) DEFAULT 'not started'
    );`
  )

  db.execute(
    `
    CREATE TABLE IF NOT EXISTS subtasks (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    task_id INTEGER,
    name TEXT NOT NULL,
    description TEXT,
    due_date TEXT DEFAULT (datetime('now')),
    status TEXT CHECK (status IN ('not started', 'in progress', 'completed')) DEFAULT 'not started',
    FOREIGN KEY (task_id) REFERENCES tasks(id) ON DELETE CASCADE
    );
    `
  )
}

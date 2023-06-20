import { useState, ChangeEvent, FormEvent } from 'react'
import plusIcon from '../../assets/plus.png'
import '../../global.css'
import styles from './TaskForm.module.css'

export interface TaskFormProps {
  onCreateTask: (newTaskTitle: string) => void
}

const TaskForm = ({onCreateTask}: TaskFormProps) => {
  const [newTaskTitle, setNewTaskTitle] = useState('')

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setNewTaskTitle(event.target.value)
  }

  const handleFormsubmit = (event: FormEvent<HTMLFormElement> ) => {
    event.preventDefault()
    onCreateTask(newTaskTitle)
    setNewTaskTitle('')
  }

  return (
    <form className={styles.form} onSubmit={handleFormsubmit}>
    <input
      className={styles.input}
      type="text"
      placeholder="Adicione uma nova tarefa"
      value={newTaskTitle}
      onChange={handleInputChange}
    />

    <button type="submit">
      Criar <img src={plusIcon} alt="icone de adição de task" />
    </button>
  </form>
  )
}

export default TaskForm
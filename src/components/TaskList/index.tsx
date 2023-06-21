import {useEffect, useState} from 'react'
import { TaskType } from "../../App"
import styles from './TaskList.module.css'
import Clipboard from '../../assets/Clipboard.svg'

export interface TaskListProps {
  tasks: TaskType[]
}

const TaskList = ({tasks}:TaskListProps) => {
  const [hasTasks, setHasTasks] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (tasks.length > 0) {
      setHasTasks(true);
    }
    setTimeout(() => {
      setLoading(false)
    }, 2500);
  }, [tasks]);


  return (
    <section className={styles.session__container}>
      <div>
        {loading && (
          <div className={styles.spinner__container}>
            <p>Carregando...</p>
            <div className={styles.spinner}></div>
          </div>
        )}


        {!loading && (
          <div className={styles.tasks__container}>
            <div className={styles.tasks__badges__container}>
              <div className={styles.tasks__badge__wrapper}>
                <p className={styles.tasks__badge__wrapper__create__tasks}>Tarefas Criadas</p>
                <span>0</span>
              </div>

              <div className={styles.tasks__badge__wrapper}>
                <p className={styles.tasks__badge__wrapper__finished__tasks}>Concluídas</p>
                <span>0</span>
              </div>
            </div>
          </div>
        )}

        {!loading && hasTasks ? (    
          tasks.map((task) => (
            <div key={task.id}>
              {task.title}
            </div>
          ))
        ) : (
          !loading && (
            <div className={styles.empty__tasks__container}>
              <div>
                <img src={Clipboard} alt="imagem clipboard" />
              </div>

              <div className={styles.empty__tasks__container__messages}>
                <p>Você ainda não tem tarefas cadastradas</p>
                <p>Crie tarefas e organize seus itens a fazer</p>
              </div>
              
            </div>
          )
        )}
      </div>
    </section>
  )
}

export default TaskList
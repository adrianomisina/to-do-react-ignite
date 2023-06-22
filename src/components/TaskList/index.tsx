import { useEffect, useState } from 'react';
import { TaskType } from "../../App";
import styles from './TaskList.module.css';
import Clipboard from '../../assets/Clipboard.svg';
import TrashIcon from '../../assets/trash.svg';
import Check from '../../assets/check.svg';
import Checked from '../../assets/checked.svg';

export interface TaskListProps {
  tasks: TaskType[];
  onToggleCompleted: (taskId: number) => void;
  onDeleteTask: (taskId: number) => void;
}

const TaskList = ({ tasks, onToggleCompleted, onDeleteTask }: TaskListProps) => {
  const [loading, setLoading] = useState(true);
  const [completedTasksCount, setCompletedTasksCount] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2500);
  }, []);

  useEffect(() => {
    const countCompletedTasks = tasks.filter((task) => task.isCompleted === true).length;
    setCompletedTasksCount(countCompletedTasks);
  }, [tasks]);

  return (
    <section className={styles.session__container}>
      <div>
        {loading ? (
          <div className={styles.spinner__container}>
            <p>Carregando...</p>
            <div className={styles.spinner}></div>
          </div>
        ) : (
          <div className={styles.tasks__container}>
            <div className={styles.tasks__badges__container}>
              <div className={styles.tasks__badge__wrapper}>
                <p className={styles.tasks__badge__wrapper__create__tasks}>Tarefas Criadas</p>
                <span>{tasks.length}</span>
              </div>

              <div className={styles.tasks__badge__wrapper}>
                <p className={styles.tasks__badge__wrapper__finished__tasks}>Concluídas</p>
                {completedTasksCount === 0 ? (
                  <span>0</span>
                ) : (
                  <span>{completedTasksCount} de {tasks.length}</span>
                )}
              </div>
            </div>
          </div>
        )}

        {!loading && tasks.length === 0 && (
          <div className={styles.empty__tasks__container}>
            <div>
              <img src={Clipboard} alt="imagem clipboard" />
            </div>

            <div className={styles.empty__tasks__container__messages}>
              <p>Você ainda não tem tarefas cadastradas</p>
              <p>Crie tarefas e organize seus itens a fazer</p>
            </div>
          </div>
        )}

        {!loading && tasks.length > 0 && (
          <div>
            {tasks.map((task) => (
              <div key={task.id} className={styles.tasks__to__do__container}>
                <img
                  className={styles.check__btn}
                  src={task.isCompleted ? Checked : Check}
                  alt="tasks icons states"
                  onClick={() => onToggleCompleted(task.id)}
                />
                <p className={task.isCompleted ? styles.completedTask : styles.notCompleteTask}>{task.title}</p>
                <img src={TrashIcon} alt="trash icon" onClick={() => onDeleteTask(task.id)} />
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default TaskList;

import { useState } from "react"
import Header from "./components/Header"
import TaskForm from "./components/TaskForm"
import TaskList from "./components/TaskList"
export interface TaskType {
  id: number;
  title: string;
  isCompleted: null | boolean;
}

const App = () => {
  const [tasks, setTasks] =useState<TaskType[]>([
    {
      id: 1,
      title: 'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.',
      isCompleted: false
    },
    {
      id: 2,
      title: 'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.',
      isCompleted: false
    },
    {
      id: 3,
      title: 'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.',
      isCompleted: false
    },
    {
      id: 4,
      title: 'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.',
      isCompleted: false
    }
  ])

  const handleCreateTask = (newTaskTitle: string) => {
    const newTask: TaskType = {
      id: tasks.length + 1,
      title: newTaskTitle,
      isCompleted: false
    }
    setTasks([...tasks, newTask])
  }

  const handleToggleCompleted = (taskId: number) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, isCompleted: !task.isCompleted } : task
      )
    );
  };

  const handleDeleteTask = (taskId: number) => {
    const updateTasks = tasks.filter((task)=> task.id !== taskId)
    setTasks(updateTasks)
  }

  return (
    <>
      <Header />
      <main>
        <TaskForm onCreateTask = {handleCreateTask}/>
        <TaskList tasks={tasks} onToggleCompleted={handleToggleCompleted} onDeleteTask = {handleDeleteTask}/>
      </main>
    </>
  )
}

export default App
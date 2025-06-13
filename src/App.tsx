import './App.css'
import NewTaskCard from './Components/NewTaskCard/NewTaskCard'
import Task from './Components/Task'
import Title from './Components/Title'
import type { ITask } from './Components/Task'
import { useState } from 'react'


export default function App() {
  const [tasks, setTasks] = useState<ITask[]>([])

  function addTask(task: ITask){
    setTasks(prev => [...prev, task])
  }

  function toggleTaskDone(idx: number) {
    setTasks(prev => {
        const newTasks = [...prev];
        newTasks[idx] = { ...newTasks[idx], done: !newTasks[idx].done };
        newTasks.sort((a, b) => Number(!!a.done) - Number(!!b.done));
        return newTasks;
    });
}

  function deleteTask(idx: number){
    setTasks(prev => prev.filter((_, i) => i !== idx))
  }

  return (
      <div className='container'>
        <Title></Title>
        <Task tasks={tasks} onDelete={deleteTask} onToggleDone={toggleTaskDone}></Task>
        <NewTaskCard onAddTask={addTask}></NewTaskCard>
      </div>
)}
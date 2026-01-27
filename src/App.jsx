import { useState } from 'react'
import TaskManagementApp from './TaskManagement'
import './App.css'

function App() {
  const[ tasks, setTasks] =useState([]);

  const addTask=(taskText)=>{
    const newTask ={
      id: Date.now(),
      text: taskText
    };
    setTasks([...tasks,newTask])
  }

  const deleteTask= (idToDelete)=>{
   setTasks(tasks.filter(task=> task.id !== idToDelete)) ;
  }
  
  return (
    <>
    <h1>Task Management</h1>
    <TaskManagementApp onAddTask ={addTask} tasks={tasks} onDeleteTask={deleteTask}/>
    </>
  )
}

export default App;

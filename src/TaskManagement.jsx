import { useState } from "react"
import "./TaskManagement.css"

export default function TaskManagementApp({onAddTask, tasks,onDeleteTask, onToggleTask}){

    const[title, setTitle] =useState("");

    const addTaskItem=()=>{
        if (title.trim() === "") return;
        onAddTask(title);
        setTitle("");
    } 

    return (
        <div>
           <input 
           placeholder="Add your task"
           type="text"
           value={title}
           onChange={(e) => setTitle(e.target.value)}
             />
            <button onClick={addTaskItem}>Add Task</button>
            
            <h2>Your Tasks:</h2>
                
                {tasks.map((task)=> (
                    <div key={task.id}>
                        <input 
                        type="checkbox"
                        checked={task.completed}
                        onChange={() => onToggleTask(task.id)}
                        />

                        <span 
                        style={{
                            textDecoration: task.completed ? "line-through" : "none" 
                        }}
                        >
                            {task.text}
                        </span>
                        
                        <button onClick={()=> onDeleteTask(task.id)}>Delete</button>
                    </div>
                ))}
            </div>
    )
} 
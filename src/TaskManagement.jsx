import { useState } from "react"

export default function TaskManagementApp({onAddTask, tasks,onDeleteTask}){

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
            
            <div>
                <h2>Your Tasks:</h2>
                {tasks.map((task)=> (
                    <div key={task.id}>
                        <p>{task.text}</p>
                        <button onClick={()=> onDeleteTask(task.id)}>Delete</button>
                    </div>
                ))}
            </div>
        </div>
    )
} 
import { useState , useEffect} from 'react'
import TaskManagementApp from './TaskManagement'
import './App.css'


function App() {
  const[ tasks, setTasks] =useState(()=>{
    const savedTasks =localStorage.getItem('tasks');
    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  useEffect(()=>{
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const[filter, setFilter] = useState(() => {
  const savedFilter = localStorage.getItem('filter');
  return savedFilter || "All";
});

useEffect(() => {
  localStorage.setItem('filter', filter);
}, [filter]);

  const addTask=(taskText)=>{
    const newTask ={
      id: Date.now(),
      text: taskText,
      completed:false
    };
    setTasks([...tasks,newTask])
  }

  const deleteTask= (idToDelete)=>{
   setTasks(tasks.filter(task=> task.id !== idToDelete)) ;
  }
  
  const toggleTask=(id)=>{
    setTasks(tasks.map(task =>
      task.id ===id ? {...task, completed: !task.completed }
      : task
    ))
  };

  const changeFilter =(filterType) =>{
    setFilter(filterType);
  }

 let filteredTasks;

 if (filter ==="Active"){
  filteredTasks =tasks.filter(task=> task.completed === false);
} else if (filter === "Completed"){
  filteredTasks =tasks.filter(task=> task.completed === true);
} else {
  filteredTasks= tasks;
}


  return (
    <>
    <h1>Task Management</h1>
    <TaskManagementApp 
     onAddTask ={addTask}
     tasks={filteredTasks} 
     onDeleteTask={deleteTask}
     onToggleTask= {toggleTask}
     filter= {filter}
     onChangeFilter={changeFilter}
     />
    
    </>
  )
}

export default App;

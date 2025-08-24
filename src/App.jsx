import Header from "./Components/Header"
import {useState, useEffect} from 'react'
import TaskList from "./Components/TaskList"
import './App.css';

function App() {
  const [tasks, setTask] = useState(() =>{
    const savedTask = localStorage.getItem('tasks');
    return savedTask ? JSON.parse(savedTask) : [];
  })

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks])

  const addTask = (input) => {
    const newTask = {id: Date.now(), text: input, completed: false}
    setTask([...tasks, newTask])
  }

  const toggleTask = (id) => {
    setTask(
      tasks.map((task) => 
        task.id === id ? {...task, completed: !task.completed} : task
      )
    )
  }

  const delTask = () =>{
    setTask(
      tasks.filter((task) => task.completed === false)
    )
  }
  

  return(
    <div className="App">
      <Header />
      <TaskList tasks={tasks} onAddTask={addTask} toggleTask={toggleTask} delTask={delTask}/>
    </div>
  )
}


export default App
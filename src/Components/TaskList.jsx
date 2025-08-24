import Task from "./Task"
import AddTask from "./AddTask"
import RemoveCompTask from "./RemoveCompTask"
import {useState} from 'react'

function TaskList({tasks, onAddTask, toggleTask, delTask}){
    const [show, setShow] = useState(false);

    return(
        <div className="task-list">
        {tasks.map(task => {
            return(
                <Task key={task.id} task={task} toggleTask={toggleTask}  />
            )
        })}
        <AddTask onAddTask={onAddTask} show={show} setShow={setShow}/>
        <RemoveCompTask delTask={delTask} show={show}/>
        </div>
    )
}

export default TaskList
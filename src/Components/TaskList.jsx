import Task from "./Task"
import AddTask from "./AddTask"
import RemoveCompTask from "./RemoveCompTask"

function TaskList({tasks, onAddTask, toggleTask, delTask}){
    return(
        <div className="task-list">
        {tasks.map(task => {
            return(
                <Task key={task.id} task={task} toggleTask={toggleTask}  />
            )
        })}
        <AddTask onAddTask={onAddTask}/>
        <RemoveCompTask delTask={delTask}/>
        </div>
    )
}

export default TaskList
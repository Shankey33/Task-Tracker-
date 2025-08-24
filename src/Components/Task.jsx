import{useState} from 'react'

function Task({task, toggleTask}){

    return(
        <>
            <div className={`container-task${task.completed ? " completed-task" : ""}`} onClick={() => toggleTask(task.id)}>
                <p>{task.text}</p>
            </div>

        </>
    )
}

export default Task
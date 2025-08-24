import React from 'react'
import '../App.css'

const RemoveCompTask = ({delTask, show}) => {



  return (
        <div className={`remove-completed-task ${show?" hide":""}`} onClick={delTask}>
        <p>Remove Completed Task</p>    
        </div>
  )
}

export default RemoveCompTask

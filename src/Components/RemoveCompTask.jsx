import React from 'react'

const RemoveCompTask = ({delTask}) => {
  return (
        <div className="remove-completed-task" onClick={delTask}>
        <p>Remove Completed Task</p>    
        </div>
  )
}

export default RemoveCompTask

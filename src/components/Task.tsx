import React from "react";


const Task = ({taskIndex, task, handleDragStart}:TaskProps) =>  {
  return(
  <div id={`${taskIndex}`} className={"card todo"} draggable={true} 
    onDragStart={(e) => handleDragStart(e, taskIndex, task.type)}>
  <div className="card-body">
    <h5 className="card-title">{task.title}</h5>
    <p className="card-text">{task.notes}</p>
    <span className="badge bg-primary">{task.type}</span>
  </div>
</div>
  )
}

export default Task;
import React, { FC } from "react";
import { isPropertySignature } from "typescript";

interface Props {
  task:Todo
}


const Task = ({task}: Props) =>  {
  return(
  <div className={"card todo"}>
  <div className="card-body">
    <h5 className="card-title">{task.title}</h5>
    <p className="card-text">{task.notes}</p>
    <span className="badge badge-pill badge-info">Info</span>
    {/* <a href="#" className="btn btn-primary"></a> */}
  </div>
</div>
  )
}

export default Task;

import React, { FC } from "react";
import Task from './Task'

interface Props {
  list: Column,
  key: number
}


const Column = ({list}: Props) =>  {
  return(
    <div className="column">
      <p>{list.name}</p>
      {list.todoList.map((task: Todo, key: number) => {
        return <Task key={key} task={task} />
      })
      }

    </div>
  )
}


export default Column;
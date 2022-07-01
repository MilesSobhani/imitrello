import React, { FC } from "react";
import Task from './Task'

interface Props {
  list: Column
  // todos: Array<Todo>
  key: number
}


const Column = ({list}: Props) =>  {
  return(
    <div>
      <p>{list.name}</p>
      {/* {list.todoList.map((task: Todo, key: number) => {
        return <Task key={key} />
      })
      } */}

    </div>
  )
}


export default Column;
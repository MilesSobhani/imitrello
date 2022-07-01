import React, { FC } from "react";
import { isPropertySignature } from "typescript";
import Task from './Task'

interface Props {
  todos: Array<Todo>
}


const Column = ({todos}: Props) =>  {
  return(
    <div>
      {/* {todos.name}
      {todos.map((todos: Todo, key: number) => {
        return <Task todo={Todo} key={key} />
      })
      } */}

    </div>
  )
}


export default Column;
import React from "react";
import Task from './Task'




const Column = ({list, handleDragOver, handleDragStart, handleDrop}: ColumnProps) => {
  return (
    <div className="column" 
      onDrop={(e) => handleDrop(e, list.name)} 
      onDragOver={(e) => handleDragOver(e)}>
      <p>{list.name}</p>
      {list.todoList.map((task: Todo, index: number) => {
        return <Task 
          taskIndex={index} 
          task={task}
          handleDragStart={handleDragStart}
        />
      })
      }

    </div>
  )
}


export default Column;
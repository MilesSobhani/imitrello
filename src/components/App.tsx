import 'bootstrap/dist/css/bootstrap.css'
import '../App.css';
import React, { ChangeEvent, FC, FormEvent, useState } from 'react';
import Column from './Column';

const columnList: Array<Column> = [
  { name: 'Todo', todoList: [] },
  { name: 'In Progress', todoList: [] },
  { name: 'Completed', todoList: [] }
]

const App: FC = () => {

  const [taskName, setNewName] = useState('')
  const [taskNotes, setNewNotes] = useState('')
  const [taskType, setNewType] = useState('')
  const [taskList, updateTasks] = useState(columnList)
  const [value, setValue] = useState(0);


  //this should be changed if we want to add more types
  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLSelectElement>): void => {
    let eventName = event.target.name;
    if (eventName === 'title') {
      setNewName(event.target.value)
    } else if (eventName === 'notes') {
      setNewNotes(event.target.value)
    } else {
      setNewType(event.target.value)
    }
  }

  const handleFormSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    let newTodo: Todo = {
      title: (event.currentTarget.elements[0] as HTMLInputElement).value,
      notes: (event.currentTarget.elements[1] as HTMLInputElement).value,
      type: (event.currentTarget.elements[2] as HTMLInputElement).value
    }
    updateTaskList(newTodo)
    setNewName('')
    setNewNotes('')
  }

  const updateTaskList = (newTodo: Todo) => {
    let updateList = taskList
    for (var i = 0; i < taskList.length; i++) {
      if (newTodo.type === taskList[i].name) {
        updateList[i].todoList.push(newTodo)
        updateTasks(updateList)
        setValue(value + 1)
      }
    }
  }

  const deleteTodo = (location: number[]) => {
    let deleteList = taskList;
    deleteList[location[0]].todoList.splice(location[1], 1)
    updateTasks(deleteList)
    setValue(value + 1)
  }

  const handleDragStart = (
    event: React.DragEvent<HTMLDivElement>, taskId: number, name: string): void => {
    event.dataTransfer.setData('taskType', name);
    event.dataTransfer.setData('taskId', taskId.toString())
  }

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>): void => {
    event.preventDefault()
  }

  const handleDrop = (event: React.DragEvent<HTMLDivElement>, targetName: string) => {
    let todoType: string = event.dataTransfer.getData("taskType")
    let taskLocation: number = Number(event.dataTransfer.getData('taskId'))
    let deleteCoords: number[] = []
    for (let j: number = 0; j < taskList.length; j++) {
      if (todoType === taskList[j].name) {
        let todoToUpdate = taskList[j].todoList[taskLocation]
        todoToUpdate.type = targetName;
        deleteCoords = [j, taskLocation];
        updateTaskList(todoToUpdate)
        deleteTodo(deleteCoords)
      }
    }
  }

  return (
    <div className='main'>
      <div className="jumbotron title">
        <h1 className="display-4">Imitrello</h1>
        <h3 className="lead">Keep up with your todos or tickets</h3>
      </div>

      <form onSubmit={handleFormSubmit}>
        <div className="form-group">
          <div>
            <label>Todo Title</label>
            <input className="form-control" type='text' value={taskName}
              name='title' placeholder='title' onChange={handleChange} />
          </div>
          <div className='form-group'>
            <label>Todo Description</label>
            <input className="form-control" type='text' value={taskNotes}
              name='notes' placeholder='description' onChange={handleChange} />
          </div>
          <div className="form-group">
            <label>Todo Status</label>
            <select name="type" value={taskType} onChange={handleChange}>
              {columnList.map((columnName: Column, key: number) => {
                return <option>{columnName.name}</option>
              })
              }
            </select>
          </div>
          <div className='form-group'>
            <button className="btn btn-primary">+ Add new todo</button>
          </div>
        </div>
      </form>

      <div className="columnList">
        {taskList.map((list: Column, index: number) => {
          return <Column list={list}
            columnIndex={index}
            handleDragOver={handleDragOver}
            handleDragStart={handleDragStart}
            handleDrop={handleDrop}
          />
        })
        }
      </div>
    </div>
  );

}

export default App;

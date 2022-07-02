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

    let updateList = taskList
    for (var i = 0; i < taskList.length; i++) {
      if (newTodo.type === taskList[i].name) {
        updateList[i].todoList.push(newTodo)
        updateTasks(updateList)
        setNewName('')
        setNewNotes('')

      }
    }
    console.log(updateList)

  }
  // const [isOpen, setIsOpen] = React.useState(false);
  // const toggleModal = () => setIsOpen(!isOpen);

  return (
    <div>
      <div className="jumbotron jumbotron-fluid title">
        <div className="container">
          <h1 className="display-4">Imitrello</h1>
          <h3 className="lead">Keep up with your todos or tickets</h3>
        </div>
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
        {taskList.map((list: Column, key: number) => {
          return <Column list={list} key={key} />
        })
        }
      </div>
    </div>
  );

}

export default App;

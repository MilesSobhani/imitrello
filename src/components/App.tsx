import '../App.css';
import React, { FC, useState } from 'react';
import Column from './Column';


const columnList: Array<Column> = [
  {name: 'Todo', todoList:[]},
  {name: 'In Progress', todoList:[]},
  {name: 'Completed', todoList:[]}
]


const todoList: Array<Todo> = [

]

const App: FC = () =>  {

  // const [column, columnState] = useState(columnList)

    return (
      <div className="App">
        
        {columnList.map((list: Column, key: number) => {
          return <Column list={list} key={key} />
        })
        }
      </div>
    );
  
}

export default App;

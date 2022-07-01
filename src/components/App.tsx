import 'bootstrap/dist/css/bootstrap.css'
import '../App.css';
import React, { FC, useState } from 'react';
import Column from './Column';


const columnList: Array<Column> = [
  {name: 'Todo', todoList:[]},
  {name: 'In Progress', todoList:[]},
  {name: 'Completed', todoList:[]}
]

for(var i = 0; i < columnList.length; i++){
  columnList[i].todoList.push(
    {title:"do something cool",
     type: columnList[i].name, 
     notes: `take some time to do something cool with ${i}`}
  )
}

const todoList: Array<Todo> = [

]

const App: FC = () =>  {

  // const [column, columnState] = useState(columnList)

    return (
      <div className="App">
        <h1>Imitrello</h1>
        {columnList.map((list: Column, key: number) => {
          return <Column list={list} key={key} />
        })
        }
      </div>
    );
  
}

export default App;

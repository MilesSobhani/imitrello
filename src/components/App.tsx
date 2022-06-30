import logo from './logo.svg';
import '../App.css';
import React, { Component } from 'react';
import Column from './Column';


interface User{

}

class App extends Component{
  constructor(props:User){
    super(props);
    this.state = {
      todos:[],
      // list of columns name [todo - title]
    }
  }
  render(): React.ReactNode {
    
    return (
      <div className="App">
        <p>Something cool!</p>
        <Column />
      </div>
    );
  }
}

export default App;

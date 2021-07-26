import './App.css';
import React, {Component} from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import AddPlayerForm from './components/AddPlayerFrom';
import Registered from './components/Registered';


//files for understanding components, state and props

// import data from './resumeData.json';
const data = require('./resumeData.json');

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route path='/' exact>
            <header className="App-header">
              <Header data={data.main}/>
              <button onClick={() => {
              console.log("-----click")
              fetch()
              }}>my button</button>
            </header>
            <AddPlayerForm />
          </Route>
          <Route path='/registered'>
            <Registered />
          </Route>
        </Switch>
      </div>
    );
  }
}

export {App};

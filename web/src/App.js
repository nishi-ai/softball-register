import './App.css';
import React, {Component} from 'react';
import { Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import AddPlayerForm from './components/AddPlayerForm';
import Registered from './components/Registered';


//files for understanding components, state and props

// import data from './resumeData.json';
const data = require('./resumeData.json');

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <header className="App-header">
            <Route path='/' exact>
              {/* <Header data={data.main}/> */}
              <AddPlayerForm />
            </Route>
            <Route path='/registered'>
              <Registered />
            </Route>
          </header> 
        </Switch>
      </div>
    );
  }
}

export {App};

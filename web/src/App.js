import './App.css';
import React, {Component} from 'react';
import { Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Registered from './components/Registered';
import NewPlayerPage from './pages/NewPlayerPage';


//files for understanding components, state and props
class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <header className="App-header">
            <Route path='/player/registration' exact>
              <NewPlayerPage />
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

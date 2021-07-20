import React from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import {BrowserRouter as Router, Switch , Route} from "react-router-dom";
import Login from './component/Login';
import Main from './common/Main';
function App() {
 

  return (
    <div className="app">
      <Router>
    <Switch>    
   <Route path="/login-user" exact component={Login}/>
      <Main />
      </Switch>

    </Router>
    </div>
  );
}

export default App;

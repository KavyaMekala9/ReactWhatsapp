import React from 'react';
import './App.css';
import {Sidebar} from './Sidebar.js';
import {Chat} from './Chat.js';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    // BEM Naming convention
    <div className="app">
      {/* <h1>Hello Kavya !!</h1> */}
      <div className="app_body">
        <Router>
        <Sidebar />
          <Switch>        
            <Route path="/rooms:roomId">             
              <Chat/>
            </Route>
            <Route path="/">              
              <Chat/>
            </Route>
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;

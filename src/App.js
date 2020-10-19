import React, {useState} from 'react';
import './App.css';
import {Sidebar} from './Sidebar.js';
import {Chat} from './Chat.js';
import {Login} from './Login.js';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  const [user, setUser] = useState(null);
  
  return (
    
    // BEM Naming convention
    <div className="app">
      {!user ? (
        <Login/>
      ) : (
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
      )}
      {/* <h1>Hello Kavya !!</h1> */}
      
    </div>
  );
}

export default App;

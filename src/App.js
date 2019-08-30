import React from 'react';
import './App.css';
import Login from './components/LoginForm.js';
import SignUp from './components/SignUp.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <div>
         <Login />
         
        </div>
        <div>
        <SignUp />
        </div>
      </header>
      
    </div>
  );
}

export default App;

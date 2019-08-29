import React from 'react';
import './App.css';
import TabNav from './components/TabNav/TabNav';
import AppRouter from './components/AppRouter/AppRouter';

function App() {
  return (
    <div className="App">
      <div className='main-content'>
        <TabNav />
        <AppRouter />
      </div>
      <div className='footer'>
        
      </div>
    </div>
  );
}

export default App;

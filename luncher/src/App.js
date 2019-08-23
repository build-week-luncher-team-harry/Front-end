import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import TabNav from './components/TabNav/TabNav';

function App() {
  return (
    <div className="App">
      <Header />
      <TabNav />
      {/* <AppRouter /> */}
    </div>
  );
}

export default App;

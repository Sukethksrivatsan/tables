import React from 'react';
import DisplayTable from './components/DisplayTable';
import CalendarComp from './components/CalendarComp';
import './App.css';
const App = () => {
  return <div className='display'>
    <h2>Select dates within a specific range</h2>
    <CalendarComp/>
    <DisplayTable/>
  </div>
};

export default App;

import React from 'react';
import logo from './logo.svg';
import './App.css';
import Reminder from './Models/Reminder';
import Reminders from './Components/Reminders';

const reminders:Reminder[]=[
  {id:1,title:"Kishore"},
  {id:2,title:"Mathan"}
]

function App() {
  return (
    <div className="App">
      <Reminders items={reminders}/>
    </div>
  );
}

export default App;

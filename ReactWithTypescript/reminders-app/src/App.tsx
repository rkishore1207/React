import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Reminder from './Models/Reminder';
import Reminders from './Components/Reminders';

function App() {

  const [reminders,setReminders] = useState<Reminder[]>([
    {id:1,title:"Kishore"},
    {id:2,title:"Mathan"}
  ]);

  return (
    <div className="App">
      <Reminders items={reminders}/>
    </div>
  );
}

export default App;

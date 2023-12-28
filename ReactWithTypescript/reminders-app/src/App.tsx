import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Reminder from './Models/Reminder';
import Reminders from './Components/Reminders';
import ReminderService from './Services/Reminder';

function App() {

  const [reminders,setReminders] = useState<Reminder[]>([]);

  useEffect(() => {loadReminders()},[]);

  const loadReminders = async ()=>{
    const reminders = await ReminderService.getReminders();
    setReminders(reminders);
  }

  return (
    <div className="App">
      <Reminders items={reminders}/>
    </div>
  );
}

export default App;

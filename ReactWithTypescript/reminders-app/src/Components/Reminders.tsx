import React from "react";
import Reminder from "../Models/Reminder";

interface ReminderListProps{
    items:Reminder[];
}

function Reminders({items}:ReminderListProps){ //({items}:ReminderListProps)
    return(
        <ul>
            {items.map((item)=>{
                return(<li key={item.id}>{item.title}</li>)
            })}
        </ul>
    )
}

export default Reminders;
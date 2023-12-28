import React, { useState } from 'react';

function AddReminders() {

    const [title,setTitle] = useState('');

    return (
        <div>
            <label htmlFor="title"></label>
            <input id='title' value={title} onChange={event=>event.target.value} type="text" className="form-control" />
            <button className="btn btn-primary">Add Reminders</button>
        </div>
    );
}

export default AddReminders;
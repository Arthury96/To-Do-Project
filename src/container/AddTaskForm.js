import React, { useState, useEffect } from 'react'
import TaskForm from '../components/TaskForm'
import '../styles/AddTaskForm.css'


function AddTaskForm(props) {

    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [priority, setPriority] = useState('1');
    const [done, setDone] = useState(false);


    const handleSubmit = (e) => {
        e.preventDefault();

        props.AddTask(name, description, priority, done);
        setName('');
        setDescription('');
        setPriority('1');
        setDone(false);

        
    };



    return (
     <div className="AddTaskForm">
        <h2>Add New Task</h2>
        <TaskForm name={name}
                  setName={setName}
                  description={description}
                  setDescription={setDescription}
                  priority={priority}
                  setPriority={setPriority}
                  handleSubmit={handleSubmit}

                   />
     </div>
    )
}

export default AddTaskForm

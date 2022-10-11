import React, {useState, useEffect} from 'react';
import './App.css';
import AddTaskForm from './container/AddTaskForm';
import ComplitedBox from './container/ComplitedBox';
import CurrentTask from './container/CurrentTask';

function App() {

  const [task, setTask] = useState([{
    name: 'Test',
    description: 'Test 2',
    priority: "1",
    done: false
  }, {
    name: 'Test3',
    description: 'Test 4',
    priority: "2",
    done: false
  },{
    name: 'Test5',
    description: 'Test 6',
    priority: "3",
    done: false
  }, ])



  const AddTask = (name, description, priority, done) => {
    setTask((prevArray) => [...prevArray, {
      name: name,
      description: description,
      priority: priority,
      done: done
    }])
  }
  const RemoveTask = (task) => {
    
  }



  return (
    <div >
      <h1 className='title'>To Do List</h1>
      <div className="App">
      <AddTaskForm className="AddtaskForm" task={task} AddTask={AddTask}/>
      <ComplitedBox task={task} />
      
      </div>
      <div className="current" > 
        <CurrentTask task={task} AddTask={AddTask} />
      </div>

    </div>
  );
}

export default App;

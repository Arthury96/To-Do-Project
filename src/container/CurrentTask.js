import React, {useState, useEffect} from 'react'
import Task from '../components/Task'
import '../styles/CurrentTask.css'

function CurrentTask(props) {


    useEffect(() => {
        console.log(props.task[0].done)
    }, [props.task[0].done])


    // sorting by priority below
    

    props.task.sort((a, b) => {
        return b.priority - a.priority;
    });

    console.log(props.task);


    // map every element below and connect with task element


    let list = props.task.map((info, index) => <Task info={info} 
                                                     key={index} 
                                                     id={index +1}                                                     
                                                     />
    )



    return (
        <div >
            <h2 className='current-title'>Current:</h2>
            <div className='CurrentTask'>
                {list}
            </div>
        </div>
    )
}

export default CurrentTask

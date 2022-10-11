import React, { useState } from 'react'
import Complited from '../components/Complited'
import '../styles/ComplitedBox.css'
import { useEffect } from 'react'

function ComplitedBox(props) {

    const doneResults = (arg) => {
        let positive = 0;
        for (let i = 0; i < arg.length; i++) {
          
          if (arg[i].done === true) {
        
            positive++
          } 
          
          
        }
        return positive;

    } 

    
    console.log(doneResults(props.task));

    const [count, setCount] = useState()



    return (
        <div className='complited'>
            <h3>Today Complited</h3>
            <Complited task={props.task} doneResults={doneResults(props.task)} /> 
        </div>
    )
}

export default ComplitedBox

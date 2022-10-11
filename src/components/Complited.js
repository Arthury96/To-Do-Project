import React from 'react'



function Complited(props) {

   let render; 
   
   if (props.doneResults === props.task.length) {
     render = 'All done for today :)'
   } else if (props.doneResults !== props.task.length) {
     render = `${props.doneResults} / ${props.task.length}`
   }
 
    return (
        <div>
            <p>{render}</p>

        </div>
    )
}

export default Complited

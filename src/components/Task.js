import React, {useEffect, useState} from 'react';

import '../styles/CurrentTask.css';




function Task(props) {

    const ListProps = props.info;

     const [done, setDone] = useState(false);


    //    const handleChange = (event) => {
    //        setDone({ ...done, [props.info.done]: event.target.checked});

    //  }


       const handleChange = () => {

        
          if (done === false) {
            setDone(() => true, props.info.done = true);
          } else if (done === true) {
           setDone(() => false, props.info.done = false);
       }

            }




    const pritority = (arg) => {

            if (arg === '3') {
                return 'TaskRed';
            } else if (arg === '2') {
                return 'TaskOrange';
            } else if (arg === '1') {
                return 'TaskBlue'
            }
    };



    
    return (

        <div className={pritority(ListProps.priority)}   >
           <div>
             <p>{props.id}. {ListProps.name}</p>
             <p>{ListProps.description}</p>
           
           
           </div >  
        
             <input type="checkbox" 
                     value={done}
                     onChange={handleChange}
                    

                     ></input>
                     
             <button>X</button>
            
         </div>
    )
}

export default Task;

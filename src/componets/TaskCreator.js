import { useState } from 'react';
export let TaskCreator=({createNewTask})=>{

    let [newTask, setnewTask] = useState("");

    const handleSubmit=(e)=>{
      e.preventDefault();
      createNewTask(newTask);
      setnewTask("");
    }

    return(
        <form onSubmit={handleSubmit} className="my-2 row">
        <div className='col-9'>
        <input type="text" onChange={e=>setnewTask(e.target.value)} 
        value={newTask} placeholder='Enter a new task' className='form-control'/>
        </div>
        <div className='col-3'>
        <button className='btn btn-primary btn-sm'>Save task</button>
        </div>
        </form>
    )
  
}
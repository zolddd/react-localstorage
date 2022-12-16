export let VisibilityControl=({isChecked,showCompleted,setshowCompleted,cleanTasks})=>{
    
    let handleDelete=()=>{
        if(window.confirm("Are you sure you want to delete")){
            cleanTasks()
        }
      
    }
    return(
        <div>
        <input type="checkbox" checked={isChecked} onChange={e=>{setshowCompleted(!showCompleted)}} /> <label>Show tasks done</label>
        <button className='btn btn-danger btn-sm' onClick={handleDelete}>Clear</button>
       </div>

    )
}
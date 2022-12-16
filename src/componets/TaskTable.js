import { TaskRow } from "./TaskRow"
export let TaskTable=({tasks,toggleTask,showCompleted=false})=>{

  let taskTableRow=(doneValue)=>{
    return(

      tasks
      .filter(task=>task.done===doneValue)
      .map(task=>(
       <TaskRow task={task} key={task.name} toggleTask={toggleTask}/>
      ))
       
    )
  }
 
 
  return(
    <table className="table table-dark table-striped table-bordered border-secondary">
    <thead>
      <tr>
      <th>Tareas:</th>
      </tr>
    </thead>
    <tbody>
      {
        taskTableRow(showCompleted)
      }
   
    </tbody>
   </table>
 )

}

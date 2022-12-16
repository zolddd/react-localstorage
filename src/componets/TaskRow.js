export let TaskRow=({task,toggleTask})=>{
  return(
    <tr>
        <td className="d-flex justify-content-between">
        {task.name}
        <input type="checkbox" checked={task.done} onChange={e=>{toggleTask(task)}}/>
        </td>
 
      </tr>
  )
}
import './App.css';
import { useState, useEffect } from 'react';
import "./componets/TaskCreator";
import { TaskCreator } from './componets/TaskCreator';
import { TaskTable } from './componets/TaskTable';
import { VisibilityControl } from './componets/VisibilityControl';

function App() {

 const [tasksItems, settasksItems] = useState([]);
 const [showCompleted, setshowCompleted] = useState(false)

 let createNewTask=(taskName)=>{
  if(!tasksItems.find(task=>task.name===taskName)){
    settasksItems([...tasksItems,{
      name:taskName,
      done:false
    }]);
  }
 }

 let toggleTask=task=>{
  settasksItems(tasksItems.map(t=>(t.name===task.name) ? {...t, done: !t.done}:t))
 }

 let cleanTasks=()=>{
  settasksItems(tasksItems.filter(task=>!task.done))
  setshowCompleted(false)
  }


  useEffect(()=>{
    let data=localStorage.getItem("tasks");
    if(data){
      settasksItems(JSON.parse(data))
    }

  },[ ])

  useEffect(()=>{
  localStorage.setItem("tasks",JSON.stringify(tasksItems));
  },[tasksItems]);




  return (
    <main className="bg-dark vh-100 text-white">
      <div class="container col-md-4 offset-md-4">
      <h1>Task List</h1>
      <h2>valie</h2>
     <TaskCreator createNewTask={createNewTask}/>
     <TaskTable tasks={tasksItems} toggleTask={toggleTask}/>
     <VisibilityControl isChecked={showCompleted}  setshowCompleted={setshowCompleted} showCompleted={showCompleted} cleanTasks={cleanTasks}/>
    
     {
      showCompleted ===true &&(
      <TaskTable tasks={tasksItems} toggleTask={toggleTask} showCompleted={showCompleted}/>

      ) 
     }
      </div>
    </main>
  );
}

export default App;

import React, { useState, useEffect } from 'react';
import Forms from '../components/Forms';
import List from '../components/List';
import style from './App.module.scss';
import Timer from '../components/Timer';
import { ITask } from '../types/task';
 

function App() {
    const [task, setTask] = React.useState<ITask[]>([]);
    // const [task, setTask] = useState<ITask[]>(() => {
    //   const cachedTask = localStorage.getItem('cachedTask');
    //   return cachedTask ? JSON.parse(cachedTask) : [];
    // }); 
    // useEffect(() => {
    //   localStorage.setItem('cachedTask', JSON.stringify(task));
    // }, [task]);

    // function clearLocalStorage() {
    //   localStorage.removeItem('cachedTask');
    // }
    // clearLocalStorage()

    const [set, setUse] = useState<ITask>();
    function useTask( taskUsed: ITask){
      setUse(taskUsed);
      setTask(taskOld => taskOld.map( task =>({
        ...task,
        select: task.id === taskUsed.id ? true : false
      })) );
    }

    function endTask(){
      if (set){
        setUse(undefined);
        setTask(taskOld => taskOld.map(task =>  {
          if(task.id === set.id){
            return {
              ...task,
              set: false,
              complete: true
            }
          }
          return task;
        }))
      }
    }
  
    return (
    <div className={style.AppStyle}>
        <Forms setTask={setTask}/>
        <List 
         task={task}
         useTask={useTask}
        />
        <Timer 
          set={set}
          endTask={endTask}
        />
    </div>
  );
}

export default App;

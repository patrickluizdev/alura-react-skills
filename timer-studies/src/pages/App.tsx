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

  return (
    <div className={style.AppStyle}>
        <Forms setTask={setTask}/>
        <List task={task}/>
        <Timer/>
    </div>
  );
}

export default App;

import React, { useState } from 'react';
import style from './List.module.scss';
import Item from './Item';
import { ITask } from '../../types/task';



function List({task}: {task: ITask[]}){
  // const [task, setTask] = useState([
  //   {
  //   task: "React",
  //   time: "02:00:00"
  //   }
  // ]);

  return(
    <aside className={style.listTask}>
      <h2>Estudos do Dia</h2>
      <ul>
        {task.map((task, index)=> (
          <Item
            key={index}
            {...task}
          />
        ))}
      </ul>
    </aside>
  )
}

export default List
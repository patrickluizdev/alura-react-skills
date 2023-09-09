import React, { useState } from 'react';
import style from './List.module.scss';
import Item from './Item';
import { ITask } from '../../types/task';

interface Props {
  task: ITask[],
  useTask: (taskUsed: ITask) => void
}

function List({task, useTask}: Props){
  return(
    <aside className={style.listTask}>
      <h2>Estudos do Dia</h2>
      <ul>
        {task.map((task, index)=> (
          <Item
            useTask={useTask}
            key={task.id}
            {...task}
          />
        ))}
      </ul>
    </aside>
  )
}

export default List
import { ITask } from '../../../types/task';
import style from './Item.module.scss';

interface Props extends ITask{
  useTask: (taskUsed: ITask) => void
}

export default function item(
  {
    task,
    time, 
    select, 
    complete, 
    id, 
    useTask
  }: Props){
  // console.log("task: ", {task, time, select, complete, id})
  return(
    <li
      className={`${style.item} ${select ? style.itemSelecionado : ''} ${complete ? style.itemCompletado : ""}`}
      onClick={() => {
        // console.log("task: ", { task, time, select, complete, id });
        !complete && useTask({
          task,
          time,
          select,
          complete,
          id
        });
      }}
    >
      <h3>{task} </h3>
      <span>{time}</span>
      {complete && <span className={style.concluido}></span>}
    </li>   
  )
}
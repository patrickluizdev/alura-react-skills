import React from 'react';
import Buttons from '../Buttons';
import style from './Form.module.scss';
import { ITask } from '../../types/task';
import { v4 as uuidv4 } from 'uuid';

interface Props {
  setTask: React.Dispatch<React.SetStateAction<ITask[]>>
}

function Forms(props: Props) {
  const [task, setTaskValue] = React.useState("");
  const [time, setTime] = React.useState("00:00");

  function addTask(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    props.setTask(taskOld => [
      ...taskOld,
      {
        task,
        time,
        select: false,
        complete: false,
        id: uuidv4()
      }
    ]);
    setTaskValue("");
    setTime("00:00");
  }

  return (
    <form className={style.newTask} onSubmit={addTask}>
      <div className={style.inputContainer}>
        <label htmlFor="tarefa">Adicione o seu Estudo</label>
        <input
          type="text"
          name="tarefa"
          id="tarefa"
          value={task}
          onChange={event => setTaskValue(event.target.value)}
          placeholder='Qual vai ser o seu Foco ?'
          required
        />
      </div>
      <div className={style.inputContainer}>
        <label htmlFor="time">Tempo</label>
        <input
          type="time"
          name="time"
          step="1"
          id="time"
          value={time}
          onChange={event => setTime(event.target.value)}
          min="00:00:00"
          max="12:59:59"
          required
        />
      </div>
      <Buttons
        type="submit"
        text="Adicionar"
      />
    </form>
  )
}

export default Forms;

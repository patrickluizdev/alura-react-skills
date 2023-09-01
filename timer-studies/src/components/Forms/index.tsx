import React from 'react';
import Buttons from '../Buttons';
import style from './Form.module.scss';
import { time } from 'console';
import { ITask } from '../../types/task';
import { v4 as uuidv4} from 'uuid';



class Forms extends React.Component<{
  setTask: React.Dispatch<React.SetStateAction<ITask[]>>
}>{
  state = {
    task: "",
    time: "00:00:00"
  };
  addTask(event: React.FormEvent<HTMLFormElement>){
    event.preventDefault();
    this.props.setTask(taskOld => 
      [
        ...taskOld,
        {
          ...this.state,
          select:false,
          complete: false,
          id: uuidv4()
        } 
      ])
    this.setState({
      task: "",
      time: "00:00:00"
    })
  }
  render(){
    return(
      <form className={style.newTask} onSubmit={this.addTask.bind(this)}>
        <div className={style.inputContainer}>
          <label htmlFor="tarefa">Adicione o seu Estudo</label>
          <input 
            type="text" 
            name="tarefa" 
            id="tarefa" 
            value={this.state.task}
            onChange={event => this.setState({...this.state, task: event.target.value})}
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
            value={this.state.time}
            onChange={event => this.setState({...this.state, time: event.target.value})}
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
}
export default Forms
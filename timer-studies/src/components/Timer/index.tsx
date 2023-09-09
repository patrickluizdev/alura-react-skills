import React, { useState, } from 'react';
import { timeForSeconds } from "../../common/utils/time";
import { ITask } from "../../types/task";
import Button from "../Buttons";
import Time from "./Time";
import style from './Timer.module.scss';

interface Props{
  set: ITask | undefined,
  endTask: () => void
}

export default function Timer( { set, endTask }: Props){
  const [time, setTime] = useState<number>();

  React.useEffect(() => {
    if(set?.time){
      setTime(timeForSeconds(String(set?.time)))
    }
  }, [set])
  function startTimer(Timer: number = 0){
    setTimeout(()=> {
      if(Timer > 0){
        setTime(Timer - 1);
        return startTimer(Timer - 1);
      }
      endTask()
    }, 1000);
  }

  return(
    <div className={style.timer}>
      <p className={style.title}>Escolha um card e inicie o Cronômetro</p>
      <div className={style.timeWrapper}>
        <Time time={time}/>
      </div>
      <Button
        onClick={() => startTimer(time)}
        text="Começar"
      />
    </div>
  )
}
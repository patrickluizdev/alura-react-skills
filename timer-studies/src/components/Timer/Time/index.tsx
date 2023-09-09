import React from "react"
import style from './Time.module.scss';

interface Props{
  time: number | undefined
}

export default function Time({time = 0}: Props){
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;
  const [minutesA, minutesB] = String(minutes).padStart(2, "0");
  const [secondsA, secondsB] = String(seconds).padStart(2, "0");
  return(
    <React.Fragment>
      <span className={style.timeNumber}>{minutesA}</span>
      <span className={style.timeNumber}>{minutesB}</span>
      <span className={style.timeSpan}>:</span>
      <span className={style.timeNumber}>{secondsA}</span>
      <span className={style.timeNumber}>{secondsB}</span>
    </React.Fragment>
  )
}
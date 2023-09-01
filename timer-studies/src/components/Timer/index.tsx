import Button from "../Buttons";
import Time from "./Time";
import style from './Timer.module.scss';


export default function Timer(){
  return(
    <div className={style.timer}>
      <p className={style.title}>Escolha um card e inicie o Cronômetro</p>
      <div className={style.timeWrapper}>
        <Time />
      </div>
      <Button
        text="Começar"
      />
    </div>
  )
}
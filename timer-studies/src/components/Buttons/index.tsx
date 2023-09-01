import React from 'react';
import style from './Button.module.scss';
import { type } from 'os';


class Button extends React.Component <{ text: string; type?: "button" | "submit" | "reset" | undefined }>{
  render(){
    const {type="button"} = this.props;
    return(
      <button className={style.button} type={type}>
        {this.props.text}
      </button>
    )
  }
}

export default Button
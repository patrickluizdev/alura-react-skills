import React from 'react';
import style from './Button.module.scss';

interface Props {
  text: string,
  type?: "button" | "submit" | "reset" | undefined, 
  onClick?: () => void,
  children?: React.ReactNode
}

function Button({ onClick, type, children, text }: Props) {
  return (
    <button onClick={onClick} className={style.button} type={type}>
      {text}
    </button>
  );
}


// class Button extends React.Component<{ text: string; type?: "button" | "submit" | "reset" | undefined, onClick?: () => void }>{
//   render() {
//     const { type = "button", onClick } = this.props;
//     return (
//       <button onClick={onClick} className={style.button} type={type}>
//         {this.props.text}
//       </button>
//     )
//   }
// }

export default Button
import React from "react";
//importa o react
import "./button.css"
//inicia minha funçao botao
const Button = (props) => {
    const text= props.text;
    const estilo= props.estilo;

    return (
    <div>
      <button className={"btn " + estilo}> {text}</button>
    </div>
  );
};

export default Button;

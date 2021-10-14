import React from "react";
import './Buttom.css';

interface ButtonProps{
    buttonName: string;
}

export const Button: React.FC<ButtonProps> = (props) =>{
    return (
        <input type="button" className="ButtonSize" value={props.buttonName}/>
    );
}
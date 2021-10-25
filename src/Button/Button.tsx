import React from "react";
import './Buttom.css';
import {Link as Rlink} from 'react-router-dom';

interface ButtonProps{
    buttonName: string;
    link: string;
    
}

export const Button: React.FC<ButtonProps> = (props) =>{

    const handleLogin :React.MouseEventHandler<HTMLInputElement> = () =>{
        console.log('move');
    }

    return (
        <Rlink to={props.link} ><input type="button" className="ButtonSize" value={props.buttonName} onClick={handleLogin}></input></Rlink>
    );
}
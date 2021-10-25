import React from "react";
import './Link.css';
import {Link as Rlink} from 'react-router-dom';

interface Linkprops {
    url: string;
}

export const Link: React.FC <Linkprops> = (props) =>{
    return <Rlink to={props.url}></Rlink>
}
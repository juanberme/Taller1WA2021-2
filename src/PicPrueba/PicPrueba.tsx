import React from "react";
import './PicPrueba.css';

interface PicPruebaProps{
    PicUrl: string;
}

const PicPrueba: React.FC<PicPruebaProps> = (props) => {
    return (<div>
        <img src={props.PicUrl} className='PicPruebaImg' alt=''></img>
    </div>);
}

export default PicPrueba;
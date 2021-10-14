import React from "react";
import './Picture.css';

export interface PicturesProps{
    //PictureImg: string;
    id: number;
    PictureLikes: number;
    PictureTags: string;
    PictureDate: string;
    //<img className="PictureContainer__Img" src="./assets/Images/fondo.png"/>
    onDelete: (id: number) => void;
}

export const Pictures: React.FC<PicturesProps> = (props) =>{

    const handleDelete: React.MouseEventHandler<HTMLButtonElement> = () =>{
        console.log('delete');
        props.onDelete(props.id);
    }

    return (
        <div className="PictureContainer">
            <button onClick={handleDelete}>Delete</button>
        </div>
    );
}
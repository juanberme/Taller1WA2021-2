import React from "react";
import {useHistory} from 'react-router-dom';
import './Picture.css';

export interface PicturesProps{
    PictureImg: string;
    id: number;
    PictureLikes: number;
    PictureTags: string;
    PictureDate: string;
    type: 'edit'|'detail';
    onDelete?: (id: number) => void;
    onEdit?: (id: number) => void;
}

export const Pictures: React.FC<PicturesProps> = (props) =>{

    const history = useHistory();

    const handleDelete: React.MouseEventHandler<HTMLButtonElement> = () =>{
        console.log('delete');
        //para que no sea obligatorio mostrarlo
        if(props.onDelete){
            props.onDelete(props.id);
        }
    }

    const handleEdit: React.MouseEventHandler<HTMLButtonElement> = () =>{
        console.log('edit');
        //para que no sea obligatorio mostrarlo
        if(props.onEdit){
            props.onEdit(props.id);
        }
    }

    const handleDetails :React.MouseEventHandler<HTMLButtonElement> = () =>{
        console.log('detailss');
        history.push(`/details/${props.id}`);
    }

    return (
        <div>
            <h1>{props.PictureTags}</h1>
            <img src={props.PictureImg} className='PicImg' alt=''></img>
            <div className="PictureContainer">
                {props.type === 'edit' && <>
                    {props.onDelete && <button className='PictureButton' onClick={handleDelete}>Delete</button>}
                    {props.onEdit && <button className='PictureButton' onClick={handleEdit}>Edit</button>}
                    <button className='PictureButton' onClick={handleDetails}>View</button>
                </>}
            </div>
        </div>
    );
}
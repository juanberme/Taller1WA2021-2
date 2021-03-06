import React from "react";
import { useHistory } from "react-router";
import './Photographer.css';

export interface PhotographerProps {
    PhotographerId: number;
    PhotographerImg: string;
    PhotographerSubs: number;
    PhotographerName: string;
    //PhotographerPics: [];
    //PhotographerPicsCount: number;
    type: 'edit'|'detail';
    onDelete?: (id: number) => void;
    onEdit?: (id:number) => void;
}

export const Photographer: React.FC<PhotographerProps> = (props) => {
    const history = useHistory();

    const handlePhotographerDelete: React.MouseEventHandler<HTMLButtonElement> = () => {
        console.log('delete');
        //para que no sea obligatorio mostrarlo
        if(props.onDelete){
            props.onDelete(props.PhotographerId);
        }
    }

    const handlePhotographerEdit: React.MouseEventHandler<HTMLButtonElement> = () => {
        console.log('edit');
        //para que no sea obligatorio mostrarlo
        if(props.onEdit){
            props.onEdit(props.PhotographerId);
        }
    }

    const handlePhotographerDetails :React.MouseEventHandler<HTMLButtonElement> = () =>{
        console.log('detailss');
        history.push(`/PhotographerDetails/${props.PhotographerId}`);
    }

    return(
    <div>
        
        <div className='AlbumPicInfo'>
            <div className='AlbumCover'>
                <div className='AlbumColorContent'></div>
                <img src={props.PhotographerImg} className='AlbumImg' alt=''></img>
            </div>
            <div className='AlbumInfo'>
                <h1 className='AlbumNameCover'>{props.PhotographerName}</h1>
                <h3 className='AlbumTopicCover'>Subscriptores: {props.PhotographerSubs}</h3>
            </div>
        </div>

        <div className="PictureContainer">
            {props.type === 'edit' && <>
                {props.onDelete && <button className='PictureButton' onClick={handlePhotographerDelete}>Delete</button>}
                {props.onEdit && <button className='PictureButton' onClick={handlePhotographerEdit}>Edit</button>}
                <button className='PictureButton' onClick={handlePhotographerDetails}>View</button>
            </>}
        </div>
    </div>);
}
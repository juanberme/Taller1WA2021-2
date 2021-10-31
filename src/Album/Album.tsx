import React from "react";
import { useHistory } from "react-router";
import './Album.css';

interface AlbumProps{
    AlbumId: number;
    AlbumCover: string;
    //AlbumTotalPics: number;
    AlbumTopic: string;
    AlbumName: string;
    onDelete?: (id: number) => void;
    onEdit?: (id: number) => void;
    type: 'edit'|'detail';
}

export const Album: React.FC<AlbumProps> = (props) => {

    const history = useHistory();

    const handleAlbumDelete: React.MouseEventHandler<HTMLButtonElement> = () => {
        console.log('delete');
        //para que no sea obligatorio mostrarlo
        if(props.onDelete){
            props.onDelete(props.AlbumId);
        }
    }

    const handleAlbumEdit: React.MouseEventHandler<HTMLButtonElement> = () => {
        console.log('edit');
        //para que no sea obligatorio mostrarlo
        if(props.onEdit){
            props.onEdit(props.AlbumId);
        }
    }

    const handleAlbumDetails: React.MouseEventHandler<HTMLButtonElement> = () => {
        console.log('details');
        history.push(`/details/${props.AlbumId}`);
    }


    return(
        <div>
            <h1>{props.AlbumName}</h1>
            <img src={props.AlbumCover} className='PicImg' alt=''></img>
            <div className="PictureContainer">
                {props.type === 'edit' && <>
                    {props.onDelete && <button className='PictureButton' onClick={handleAlbumDelete}>Delete</button>} 
                    {props.onEdit && <button className='PictureButton' onClick={handleAlbumEdit}>Edit</button>}
                    <button className='PictureButton' onClick={handleAlbumDetails}>View</button>
                </>}
            </div>
        </div>
    );

}
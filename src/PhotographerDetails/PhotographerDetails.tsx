import React from "react";
import { Redirect, useParams } from "react-router";
import { useHistory } from "react-router-dom";
import { Album } from "../Album/Album";
import { AlbumElemArray } from "../AlbumElemObj/AlbumElemObj";
import { PhotographerElemArray } from "../PhotographerElemObj/PhotographerElemObj";
import './PhotographerDetails.css';

interface PhotographerDetailsProps {
    list: PhotographerElemArray[];
    album: AlbumElemArray[];
    onDelete?: (id: number) => void;
    onEdit?: (id: number) => void;
}

const PhotographerDetails: React.FC<PhotographerDetailsProps> = (props) => {

    const history = useHistory();

    const params = useParams<{id: string}>();
    
    const elem = props.list.find((elem) => {
        return elem.PhotographerId === parseFloat(params.id);
    });

    

    if(!elem){
        return <Redirect to='/404'/>
    }

    const PhotographerAlbum = props.album.filter((elem) => {
        return elem.PhotographerId === parseFloat(params.id);
    });

    const PhotoAlbum = props.album.find((elem) => {
        return elem.PhotographerId === parseFloat(params.id);
    });

    const handlePhotographerDetails :React.MouseEventHandler<HTMLButtonElement> = () =>{
        console.log('detailss');
        history.push(`/AlbumDetails/${PhotoAlbum?.AlbumId}`);
        //history.push(`/PhotographerDetails/${props.PhotographerId}`);
    }

    return (
    <div> 

            
            <div className='AlbumDetInfo'>
                <h1 className='info AlbumDetName'>{elem.PhotographerName}</h1>
                <h3 className='info AlbumDetTopic'>{elem.PhotographerSubs} Subscriptores</h3>
            </div>

            <div className='PhotographerSectionDet'>
            {PhotographerAlbum.map((elem) => {
                return <Album key={elem.AlbumId}
                    AlbumId={elem.AlbumId}
                    AlbumCover={elem.AlbumCover}
                    AlbumName={elem.AlbumName}
                    AlbumTopic={elem.AlbumTopic}
                    type='edit'
                    />
            })}
            
        </div>

        
        
     </div>);
}

/*
        Details for id: {params.id} 
        <h2>{elem.PhotographerName}</h2>
        <p> Photographer`s Album: {PhotographerAlbum.length}</p>
*/

/*
<div className='photographerCover'>
    <img src={elem.PhotographerImg} className='PhotographerCoverInfoImg' alt=''></img>
    <div className='photographerCoverInfo'>
        <h1 className='info AlbumDetName'>{elem.PhotographerName}</h1>
        <h3 className='info AlbumDetTopic'>{elem.PhotographerSubs} Subscriptores</h3>
    </div>
</div>
*/
export default PhotographerDetails;
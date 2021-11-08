import React from "react";
import { Redirect, useParams } from "react-router";
import { Album } from "../Album/Album";
import { AlbumElemArray } from "../AlbumElemObj/AlbumElemObj";
import { PhotographerElemArray } from "../PhotographerElemObj/PhotographerElemObj";

interface PhotographerDetailsProps {
    list: PhotographerElemArray[];
    album: AlbumElemArray[];
}

const PhotographerDetails: React.FC<PhotographerDetailsProps> = (props) => {

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

    return (<div> Details for id: {params.id} 
        <h2>{elem.PhotographerName}</h2>
        <p> Photographer`s Album: {PhotographerAlbum.length}</p>
        {PhotographerAlbum.map((elem) => {
            return <Album key={elem.AlbumId}
                AlbumId={elem.AlbumId}
                AlbumCover={elem.AlbumCover}
                AlbumName={elem.AlbumName}
                AlbumTopic={elem.AlbumTopic}
                type='detail'/>
                })}
     </div>);
}

export default PhotographerDetails;
import React from "react";
import { Redirect, useParams } from "react-router";
import { AlbumElemArray } from "../AlbumElemObj/AlbumElemObj";
import { PicturesElemArray } from "../PictureElemObj/PictureElemObj";
import { Pictures } from "../Pictures/Pictures";

interface AlbumDetailsProps{
    list: AlbumElemArray[];
    pictures: PicturesElemArray[];
}

const AlbumDetails: React.FC<AlbumDetailsProps> = (props) => {

    const params = useParams<{id: string}>();

    const elem = props.list.find((elem) => {
        return elem.AlbumId === parseFloat(params.id);
    });

    if(!elem){
        return <Redirect to='/404'/>
    }

    const albumPics = props.pictures.filter((elem) => {
        return elem.AlbumId === parseFloat(params.id);
    });


    return (<div> Details for id: {params.id} 
    <h2>{elem.AlbumName}</h2>
    <p>Album´s pictures: {albumPics.length}</p>
        {albumPics.map((elem) => {
            return <Pictures key={elem.id}
            id={elem.id}
            PictureImg={elem.PictureImg}
            PictureLikes={elem.PictureLikes}
            PictureTags={elem.PictureTags}
            PictureDate={elem.PictureDate}
            type='detail'/>
        })}
 </div>);
}

export default AlbumDetails;
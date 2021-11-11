import React from "react";
import { Redirect, useParams } from "react-router";
import { AlbumElemArray } from "../AlbumElemObj/AlbumElemObj";
import { PhotographerElemArray } from "../PhotographerElemObj/PhotographerElemObj";
import { PicturesElemArray } from "../PictureElemObj/PictureElemObj";
import { Pictures } from "../Pictures/Pictures";
import Tag from "../Tag/Tag";
import './AlbumDetails.css';

interface AlbumDetailsProps{
    list: AlbumElemArray[];
    pictures: PicturesElemArray[];
    photographers: PhotographerElemArray[];
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

    const photographerElem = props.photographers.find((element) => {
        return element.PhotographerId === elem.PhotographerId;
    });

    //para mostrar todos los tags del album
    const albumTags = albumPics.map((elem) => elem.PictureTags).flat();

    return (<div> 
        
        
        <div className='AlbumDetInfo'>
            <h1 className='info AlbumDetName'>{elem.AlbumName}</h1>
            <h3 className='info AlbumDetTopic'>{photographerElem?.PhotographerName}</h3>
        </div>

        <div className='AlbumTags'>
            {albumTags.map((elem, index) => {
                return <Tag key={elem.label + index} TagName={elem.label}></Tag>
            })}
        </div>

        <div className='AlbumSectionDet'>
            {albumPics.map((elem) => {
                return <Pictures key={elem.id}
                id={elem.id}
                PictureImg={elem.PictureImg}
                PictureLikes={elem.PictureLikes}
                PictureTags={elem.PictureTags}
                PictureDate={elem.PictureDate}
                type='edit'/>
            })}
        </div>
 </div>);
}

//sirve para ver la cantidad de las fotos
/*<p>Album´s pictures: {albumPics.length}</p>*/

export default AlbumDetails;
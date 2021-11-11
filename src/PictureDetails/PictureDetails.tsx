import { Avatar } from "@mui/material";
import React from "react";
import { Redirect, useParams } from "react-router";
import { PicturesElemArray } from "../PictureElemObj/PictureElemObj";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import './PictureDetails.css';
import Tag from "../Tag/Tag";
import { PhotographerElemArray } from "../PhotographerElemObj/PhotographerElemObj";
import { AlbumElemArray } from "../AlbumElemObj/AlbumElemObj";

 interface PictureDetailsProps {
    list: PicturesElemArray[];
    photographerList: PhotographerElemArray[];
    albumList: AlbumElemArray[];
 }

 const PictureDetails: React.FC<PictureDetailsProps> = ({ list, photographerList, albumList }) => {

const params = useParams<{id: string}>();
    
const elem = list.find((elem) => {
    return elem.id === parseFloat(params.id)
}); 

const albumElem = albumList.find((elemento)=> {
    return elemento.AlbumId === elem?.AlbumId;
});

const photographerElem = photographerList.find((elem) => {
    return elem.PhotographerId === albumElem?.PhotographerId;
})

if(!elem){
    return <Redirect to='/404'/>
}

    return (<div className='picDetails'>  
        <img src={elem.PictureImg} className='PicDetailImg' alt=''></img>

        <div className='picDetContent'>
        <div className='PicInfoDet'>
            <div className='tagSectionDet'>
                {elem.PictureTags.map((element) => {
                    return <Tag key={element.label} TagName={element.label}></Tag>
                })}
            </div>
            <div className='photographerSection'>
                <Avatar sx={{ width: 70, height: 70 }} alt="Peppa Pig" src={photographerElem?.PhotographerImg} />
                <div className='photographerInfo'>
                    <p className='photographerNameDet'>{photographerElem?.PhotographerName}</p>
                    <p className='pictureSubsDet'>{elem.PictureLikes} Subscriptores</p>
                </div>
            </div>

            <div className='pictureInfoDet'>
                <div className='photographerLikesDet'>
                    <FavoriteBorderIcon color="disabled" sx={{ fontSize: 30 }} />
                    <p className='photographerSubsDet'>{photographerElem?.PhotographerSubs} Me gustas</p>
                </div>
                <p className='pictureDateDet'>Publicado: {elem.PictureDate}</p>
            </div>
        </div>

        <div className='picButtonsDet'>
            <div className='downloadButtonDet'>
                <button className=' button buttonDownloadDet'>Descargar</button>
            </div>

            <div className='buttonsDet'>
                <button className='button buttonLikeDet'>Me gusta</button>
                <button className='button buttonSubscribeDet'>Suscribirme</button>
            </div>
        </div>
        </div>
        
     </div>
     );
}

//<h2>{elem.PictureTags.values}</h2>

/*<input type="button" className="buttonDownloadDet">Descargar</input>
                <div className='buttonsDet'>
                    <input type="button" className="buttonLikeDet">Me gusta</input>
                    <input type="button" className="buttonSubscribeDet">Suscribirme</input>
                </div>*/
 export default PictureDetails;
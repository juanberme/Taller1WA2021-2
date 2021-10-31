import React from "react";
import { Redirect, useParams } from "react-router";
import { PicturesElemArray } from "../PictureElemObj/PictureElemObj";

 interface PictureDetailsProps {
    list: PicturesElemArray[];
 }

 const PictureDetails: React.FC<PictureDetailsProps> = ({ list }) => {

    const params = useParams<{id: string}>();
    
const elem = list.find((elem) => {
    return elem.id === parseFloat(params.id)
}); 

if(!elem){
    return <Redirect to='/404'/>
}

    return (<div> Details for id: {params.id} 
        <h2>{elem.PictureTags}</h2>
     </div>)
}

 export default PictureDetails;
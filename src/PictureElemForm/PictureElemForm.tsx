import React from "react";
import './PictureElemForm.css';
import { PicturesProps } from "../Pictures/Pictures";

interface PictureElemFormProps {
    type: 'create' | 'edit';
    onCreate: (newPicturesElem: {PictureLikes: number, PictureTags: string, PictureDate: string;}) => void; //permite crear un nuevo elemento
}

const PictureElemForm: React.FC <PictureElemFormProps> = ({ type, onCreate }) => {

    //estado para saber si el usuario intento enviar el forms
    const [formsSubmitted, setFormsSubmitted] = React.useState(false);

    //Para guardar la info del tag
    const [ tag, setTag ] = React.useState(' ');
    const handleTagChange: React.ChangeEventHandler<HTMLInputElement> = (event) =>{
        setTag(event.target.value);
    }

    //Para guardar la info del url
    const [ url, setUrl ] = React.useState(' ');
    const handleUrlChange: React.ChangeEventHandler<HTMLInputElement> = (event) =>{
        setUrl(event.target.value);
    }

    //Para guardar la info de los likes
    const [ like, setLike ] = React.useState('');
    const handleLikeChange: React.ChangeEventHandler<HTMLInputElement> = (event) =>{
        const value = event.target.value;
        const allDigitsRegExp = /^\d*$/; //permite que solo se pongan números en el input
        if(allDigitsRegExp.test(value)){
            setLike(value);
        }
    }

    const isTagValid = tag.length >= 5;
    const isUrlValid = url.length >= 10;
    const isLikeValid = parseInt(like) > 100;

    //para enviar el formulario
    const handleSubmit: React.FormEventHandler<HTMLFormElement> = (event) =>{
        event.preventDefault();
        setFormsSubmitted(true);//cambia el estado del forms a true
        if(isTagValid && isUrlValid){
            console.log('valid');//cuando los tags y el url cumple con la condicion
            onCreate({
                PictureLikes: parseInt(like),
                PictureTags: tag,
                PictureDate: '22/06/2001'
            });
        }else{
            console.log('invalid');//cuando los tags y el url NO cumple con la condicion
        }
    }

    return (<form className='PictureElemForm' onSubmit={handleSubmit}>
        <h2>{type === 'create' ? 'Agrega' : 'Edita'} las fotos que quieras</h2>

        <label htmlFor='tag'>
            Tag
            <input name='tag' type='text' 
            onChange={handleTagChange}
            value={tag} /> 
            {(formsSubmitted && !isTagValid) && <p className='PictureElemForm__error'>The tag must be at least 5 characters</p>}
        </label>
       
        {type === 'create' && <label>
            Date
            <input type='date'></input>
        </label>}

        <label htmlFor='like'>
            Likes
            <input name='like' type='text' 
            onChange={handleLikeChange}
            value={like} /> 
            {(formsSubmitted && !isLikeValid) && <p className='PictureElemForm__error'>You must have at least 100 likes</p>} 
        </label>


        <label>
            Image URL
            <input type='text'
            onChange={handleUrlChange}
            value={url}/>
            {(formsSubmitted && !isUrlValid) && <p className='PictureElemForm__error'>The Url must be at least 5 characters</p>}
        </label>

        <button>
            {type === 'create' ? 'Agregar' : 'Editar'} 
        </button>
        
    </form>);
}

export default PictureElemForm;
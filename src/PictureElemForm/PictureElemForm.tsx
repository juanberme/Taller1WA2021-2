import React from "react";
import './PictureElemForm.css';
import { useHistory } from "react-router";
import { AlbumElemArray } from "../AlbumElemObj/AlbumElemObj";
import { isPropertySignature } from "typescript";

interface PictureElemFormProps {
    editId: number|null;
    type: 'create' | 'edit';
    onCreate: (newPicturesElem: {PictureLikes: number, PictureTags: string, PictureDate: string, PictureImg: string, AlbumId: number;}) => void; //permite crear un nuevo elemento
    onEdit: (id: number, editPicturesElem: {PictureLikes: number, PictureTags: string;}) => void; //permite editar un nuevo elemento
    Albums: AlbumElemArray[];
}

const PictureElemForm: React.FC <PictureElemFormProps> = ({ editId, type, onCreate, onEdit, Albums }) => {

    const history = useHistory();

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

    //Para guardar la info de la fecha
    const [date, setDate] = React.useState(' ');
    const handleDateChange: React.ChangeEventHandler<HTMLInputElement> = (event) =>{
        setDate(event.target.value);
    }

    //Para guardar la info del id del album
    const [album, setAlbum] = React.useState(0);
    const handleAlbumChange: React.ChangeEventHandler<HTMLSelectElement> = (event) =>{
        console.log(event.target.value);
        setAlbum(parseFloat(event.target.value));
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

    //Los requisitos para enviar el formulario
    const isTagValid = tag.length >= 5;
    const isUrlValid = url.length >= 10;
    const isLikeValid = parseInt(like) > 100;

    //para enviar el formulario
    const handleSubmit: React.FormEventHandler<HTMLFormElement> = (event) =>{
        event.preventDefault();
        setFormsSubmitted(true);//cambia el estado del forms a true
        if(type === 'create' && isTagValid && isUrlValid){
            console.log('valid');//cuando los tags y el url cumple con la condicion
            onCreate({
                PictureLikes: parseInt(like),
                PictureTags: tag,
                PictureDate: date,
                PictureImg: url, 
                AlbumId: album
            });
            setLike('');
            setTag('');
            setUrl('');
            setAlbum(0);
            setFormsSubmitted(false);
            //verficiar si es necesario
            history.push('/list');
        } else if(type === 'edit' && isTagValid && isUrlValid){
            onEdit(editId!, {PictureTags: tag, PictureLikes: parseInt(like)});
        }
        else{
            console.log('invalid');//cuando los tags y el url NO cumple con la condicion
        }
    }

    return (<form className='PictureElemForm' onSubmit={handleSubmit}>
        <h2>{type === 'create' ? 'Agrega' : 'Edita'} las fotos que quieras {editId} </h2>

        <label htmlFor='tag'>
            Tag
            <input name='tag' type='text' 
            onChange={handleTagChange}
            value={tag} 
            className='InputForms'/> 
            {(formsSubmitted && !isTagValid) && <p className='PictureElemForm__error'>The tag must be at least 5 characters</p>}
        </label>
       
        {type === 'create' && <label>
            Date
            <input type='date' 
            onChange={handleDateChange}
            value={date}
            className='InputForms'></input>
        </label>}

        <label htmlFor='like'>
            Likes
            <input name='like' type='text' 
            onChange={handleLikeChange}
            value={like} className='InputForms' /> 
            {(formsSubmitted && !isLikeValid) && <p className='PictureElemForm__error'>You must have at least 100 likes</p>} 
        </label>

        <label>
            Image URL
            <input type='text'
            onChange={handleUrlChange}
            value={url}
            className='InputForms'
            placeholder=''/>
            {(formsSubmitted && !isUrlValid) && <p className='PictureElemForm__error'>The Url must be at least 5 characters</p>}
        </label>

        <label>
            Album 
            <select
            onChange={handleAlbumChange}
            value={album}>
                {Albums.map(album => {
                    return <option 
                    key={album.AlbumId}
                    value={album.AlbumId}
                    >{album.AlbumName}</option>
                })}
            </select>
        </label>

        <button className='ButtonForms'>
            {type === 'create' ? 'Agregar' : 'Editar'} 
        </button>
        
    </form>);
}

export default PictureElemForm;
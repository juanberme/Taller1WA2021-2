import React, { useState } from "react";
import { useHistory } from "react-router";
import './AlbumElemForms.css';

interface AlbumElemFormsProps {
    editId: number | null;
    type: 'create' | 'edit';
    onCreate: (newAlbumElem: {AlbumCover: string, AlbumTopic: string, AlbumName: string}) => void; //permite crear un nuevo elemento
    onEdit: (id: number, editAlbumElem: {AlbumCover: string, AlbumTopic: string, AlbumName: string}) => void; //permite editar un nuevo elemento
}

const AlbumElemForms: React.FC <AlbumElemFormsProps> = (props) => {

    //const history = useHistory();

    //estado para saber si el usuario intento enviar el forms
    const [albumFormsSubmitted, setAlbumFormsSubmitted] = React.useState(false);

    //Para guardar la imagen del Cover
    const [AlbumCoverState, setAlbumCover] = React.useState(' ');
    const HandleAlbumCoverChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
        setAlbumCover(event.target.value);
    }

    //Para guardar la cantidad de fotos
    /*const [AlbumTotalPics, setAlbumTotalPics] = React.useState(' ');
    const HandleAlbumTotalPicsChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
        setAlbumTotalPics(event.target.value);
    }*/

    //Para guardar el tema del album
    const [AlbumTopicState, setAlbumTopic] = React.useState(' ');
    const HandleAlbumTopicChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
        setAlbumTopic(event.target.value);
    }

    const [AlbumNameState, setAlbumName] = React.useState(' ');
    const HandleAlbumNameChange: React.ChangeEventHandler<HTMLInputElement> = (event) =>{
        setAlbumName(event.target.value);
    }

    const isAlbumCoverValid = AlbumCoverState.length >= 10;
    const isAlbumTopicValid = AlbumTopicState.length >= 5;
    const isAlbumNameValid = AlbumNameState.length >= 5;

    const handleAlbumSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
        event.preventDefault();
        setAlbumFormsSubmitted(true);//cambia el estado del forms a true
        if(props.type === 'create' && isAlbumCoverValid && isAlbumTopicValid && isAlbumNameValid){
            console.log('valid');
            props.onCreate({
                AlbumCover: AlbumCoverState,
                AlbumTopic: AlbumTopicState,
                AlbumName: AlbumNameState
            });
            setAlbumCover('');
            setAlbumName('');
            setAlbumTopic('');
            setAlbumFormsSubmitted(false);
        } else if(props.type === 'edit' && isAlbumCoverValid && isAlbumNameValid && isAlbumTopicValid){
            props.onEdit(props.editId!, {AlbumCover: AlbumCoverState, AlbumTopic: AlbumTopicState, AlbumName: AlbumNameState});
        }else{
            console.log('invalid');//cuando los tags y el url NO cumple con la condicion
        }
    }

    return (<form className='PictureElemForm' onSubmit={handleAlbumSubmit}>

        <label htmlFor='albumCover'>
            Album Cover
            <input name='albumCover' type='text'
            onChange={HandleAlbumCoverChange}
            value={AlbumCoverState}
            className='InputForms'/>
            {(albumFormsSubmitted && !isAlbumCoverValid) && <p className='PictureElemForm__error'> The link should have at least 10 characters </p>}
        </label>

        <label htmlFor='albumTopic'>
            Album Topic
            <input name='albumTopic' type='text'
            onChange={HandleAlbumTopicChange}
            value={AlbumTopicState}
            className='InputForms'/>
            {(albumFormsSubmitted && !isAlbumTopicValid) && <p className='PictureElemForm__error'> The Topic should have at least 5 characters</p>}
        </label>

        <label htmlFor='albumName'>
           Album Name
            <input name='albumName' type='text'
            onChange={HandleAlbumNameChange}
            value={AlbumNameState}
            className='InputForms'/>
            {(albumFormsSubmitted && !isAlbumNameValid) && <p className='PictureElemForm__error'> The Name should have at least 5 characters</p>}
        </label>

        <button className='ButtonForms'>
            {props.type === 'create' ? 'Agregar' : 'Editar'} 
        </button>

    </form>);
}

export default AlbumElemForms;
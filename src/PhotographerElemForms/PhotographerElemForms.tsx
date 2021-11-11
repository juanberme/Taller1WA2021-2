import React from "react";
import { useHistory } from "react-router";
import './PhotographerElemForms.css';

interface PhotographerElemFormsProps {
    editId: number | null;
    type: 'create' | 'edit';
    onCreate: (newPhotographerElem: {PhotographerImg: string, PhotographerSubs: number, PhotographerName: string;}) => void; //permite crear un nuevo elemento
    onEdit: (id: number, editPhotographerElem: {PhotographerSubs: number, PhotographerImg: string ,PhotographerName: string;}) => void; //permite editar un nuevo elemento 
} 

const PhotographerElemForms: React.FC <PhotographerElemFormsProps> = (props) => {

    const history = useHistory();

    //estado para saber si el usuario intento enviar el forms
    const [PhotographerFormsSubmitted, setPhotographerFormsSubmitted] = React.useState(false);

    //Para guardar la imagen
    const [PhotgrapherImageState, setPhotgrapherImageState] = React.useState('');
    const handlePhotographerImgChange: React.ChangeEventHandler<HTMLInputElement> = (event) =>{
        setPhotgrapherImageState(event.target.value);
    }

    //Para guardar la cantidad de subds del fotografo
    const [PhotographerSubsState, setPhotographerSubsState] = React.useState('');
    const handlePhotographerSubsChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
        const value = event.target.value;
        const allDigitsSubs = /^\d*$/; //permite que solo se pongan números en el input
        if(allDigitsSubs.test(value)){
            setPhotographerSubsState(value);
        }
    }

    const [PhotographerNameState, setPhotographerNameState] = React.useState('');
    const handlePhotographerNameChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
        setPhotographerNameState(event.target.value);
    }

    //Los requisitos para enviar el formulario
    const isPhotgrapherImgValid = PhotgrapherImageState.length >= 10;
    const isPhotographerSubsValid = parseInt(PhotographerSubsState) >= 100;
    const isPhotographerNameValid = PhotographerNameState.length >=  5;

    const handlePhotographerElemFormSubmitted: React.FormEventHandler<HTMLFormElement> = (event) => {
        event.preventDefault();
        setPhotographerFormsSubmitted(true)//cambia el estado del forms a true
        if(props.type === 'create' && isPhotgrapherImgValid && isPhotographerSubsValid && isPhotographerNameValid){
            console.log('valid');//cuando los tags y el url cumple con la condicion
            props.onCreate({
                PhotographerImg: PhotgrapherImageState,
                PhotographerSubs: parseInt(PhotographerSubsState),
                PhotographerName: PhotographerNameState
            });
            setPhotgrapherImageState('');
            setPhotographerNameState('');
            setPhotographerSubsState('');
            setPhotographerFormsSubmitted(false);
            history.push('/landingPage');
            //verficiar si es necesario
        }else if(props.type === 'edit' && isPhotgrapherImgValid && isPhotographerSubsValid && isPhotographerNameValid){
            props.onEdit(props.editId!, {PhotographerName: PhotographerNameState, PhotographerImg: PhotgrapherImageState ,PhotographerSubs: parseInt(PhotographerSubsState)});
            history.push('/landingPage');
        }else{
            console.log('invalid');//cuando los tags y el url NO cumple con la condicion
        }
    }

    return(<form className='PictureElemForm' onSubmit={handlePhotographerElemFormSubmitted}>
        <h2>{props.type === 'create' ? 'Agrega' : 'Edita'} los fotografos que quieras {props.editId} </h2>

        <label htmlFor='PhotographerImg'>
            Photographer Img
            <input type='text'
            onChange={handlePhotographerImgChange}
            value={PhotgrapherImageState}
            className='InputForms'/>
            {(PhotographerFormsSubmitted && !isPhotgrapherImgValid) && <p className='PictureElemForm__error'> The Image is no available</p>}
        </label>

        <label htmlFor='PhotographerSubs'>
            Photographer Subs
            <input type='text'
            onChange={handlePhotographerSubsChange}
            value={PhotographerSubsState}
            className='InputForms'/>
            {(PhotographerFormsSubmitted && !isPhotographerSubsValid) && <p className='PictureElemForm__error'> You must have at least 100 subscribers</p>}
        </label>

        <label htmlFor='PhotographerName'>
            Photographer Name
            <input type='text'
            onChange={handlePhotographerNameChange}
            value={PhotographerNameState}
            className='InputForms'/>
            {(PhotographerFormsSubmitted && !isPhotographerNameValid) && <p className='PictureElemForm__error'> You must have at least 5 characters</p>}
        </label>

        <button className='ButtonForms'>
            {props.type === 'create' ? 'Agregar' : 'Editar'} 
        </button>

    </form>);
}

export default PhotographerElemForms;
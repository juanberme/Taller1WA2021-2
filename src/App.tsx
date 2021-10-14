import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Button } from './Button/Button';
import { Search } from './Search/Search';
import { Pictures, PicturesProps } from './Pictures/Pictures';
import PictureElemForm from './PictureElemForm/PictureElemForm';

type PicturesElemArray = {
  id: number;
  PictureLikes: number;
  PictureTags: string;
  PictureDate: string;
}

/*const PicturesElem : PicturesElemArray[] = [
  {
  //PictureImg='./assets/Images/pexels-alex-kozlov-9291817.jpg'
  id: Math.random(),
  PictureLikes:20,
  PictureTags:'Cafe',
  PictureDate:'06/12/2001'
  },
  {
    //PictureImg='./assets/Images/pexels-alex-kozlov-9291817.jpg'
    id: Math.random(),
    PictureLikes:6,
    PictureTags:'viajes',
    PictureDate:'12/04/2020'
  },
  {
    //PictureImg='./assets/Images/pexels-alex-kozlov-9291817.jpg'
    id: Math.random(),
    PictureLikes:12,
    PictureTags:'comida',
    PictureDate:'08/04/2008'
  },
  {
    //PictureImg='./assets/Images/pexels-alex-kozlov-9291817.jpg'
    id: Math.random(),
    PictureLikes:36,
    PictureTags:'New York',
    PictureDate:'11/09/2001'
  }
]*/

function App() {

  const [PicturesElem, setPicturesElem ] = React.useState<PicturesElemArray[]>([]);

  const handleCreate = (newPicturesElem: {PictureLikes: number, PictureTags: string, PictureDate: string;}) => {
    console.log('nuevo Elemento', newPicturesElem);

    //creamos un nuevo arreglo
    const newArray = [
      ...PicturesElem,//ponemos todos los elementos que ya existían
      {
        //creamos un nuevo elemento con la informacion recibida
        id: Math.random(),
        PictureLikes: newPicturesElem.PictureLikes,
        PictureTags: newPicturesElem.PictureTags,
        PictureDate:newPicturesElem.PictureDate
      }
    ];

    setPicturesElem(newArray);
  }

  const handleDelete = (deleteId: number) =>{
    console.log('delete');
    /*const PicturesElemCopy = PicturesElem.slice();
    PicturesElemCopy.splice(0,1);
    setPicturesElem(PicturesElemCopy);*/

    const PicturesElemCopy = PicturesElem.filter((elem) =>{
      if(elem.id === deleteId){
        return false;
      }else{
        return true;
      }
    });
    setPicturesElem(PicturesElemCopy)
  }

  return (
    <div className="landingPage">
        <div className="Background">
        <div className="ButtonSpace">
          <Button buttonName="Ver albumes"></Button>
          <Button buttonName="Iniciar sesión"></Button>
        </div>
        <div className="seachSpace">
          <Search></Search>
          <Button buttonName='Buscar'></Button>
        </div>
      </div>
      <div className="tagSection">
        <h2>Etiquetas</h2>
      </div>
      <div className="PictureSection">
          {PicturesElem.map((elem) => {
            return <Pictures key={elem.id}
            id={elem.id}
            //PictureImg='./assets/Images/pexels-alex-kozlov-9291817.jpg'
            PictureLikes={elem.PictureLikes}
            PictureTags={elem.PictureTags}
            PictureDate={elem.PictureDate}
            onDelete={handleDelete}/>
          })}
      </div>
      
      <PictureElemForm 
      type='create'
      onCreate={handleCreate}
      />
    </div>
  );
}

export default App;

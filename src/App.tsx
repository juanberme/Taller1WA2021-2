import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Button } from './Button/Button';
import { Search } from './Search/Search';
import { Pictures, PicturesProps } from './Pictures/Pictures';
import PictureElemForm from './PictureElemForm/PictureElemForm';
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom';
import {Link} from './Link/Link';
import PictureDetails from './PictureDetails/PictureDetails';
import Page404 from './Page404/Page404';
import { PicturesElemArray } from './PictureElemObj/PictureElemObj';
import Tag from './Tag/Tag';
import PicPrueba from './PicPrueba/PicPrueba';
import AlbumElemForms from './AlbumElemForms/AlbumElemForms';
import { AlbumElemArray } from './AlbumElemObj/AlbumElemObj';
import { Album } from './Album/Album';


function App() {

  const [PicturesElem, setPicturesElem ] = React.useState<PicturesElemArray[]>([
    {
      id: 0,
      PictureImg: process.env.PUBLIC_URL + '/images/pexels-alex-kozlov-9291817.jpg',
      PictureLikes: 211,
      PictureTags: 'Rockstar',
      PictureDate: '27/10/2021'
    },
    {
      id: 1,
      PictureImg: process.env.PUBLIC_URL + '/images/pexels-laura-tancredi-7078025.jpg',
      PictureLikes: 326,
      PictureTags: 'jaja',
      PictureDate: '16/9/2001'
    },
    {
      id: 2,
      PictureImg: process.env.PUBLIC_URL + '/images/pexels-anna-nekrashevich-6603481.jpg',
      PictureLikes: 534,
      PictureTags: 'pepe',
      PictureDate: '9/03/2000'
    },
    {
      id: 3,
      PictureImg: process.env.PUBLIC_URL + '/images/pexels-jill-burrow-6069745.jpg',
      PictureLikes: 526,
      PictureTags: 'Colombia',
      PictureDate: '10/9/2001'
    },
    {
      id: 4,
      PictureImg: process.env.PUBLIC_URL + '/images/pexels-ketut-subiyanto-4474059.jpg',
      PictureLikes: 453,
      PictureTags: 'Palmira',
      PictureDate: '17/01/2002'
    },
    {
      id: 5,
      PictureImg: process.env.PUBLIC_URL + '/images/pexels-maria-orlova-4916259.jpg',
      PictureLikes: 236,
      PictureTags: 'BErlein',
      PictureDate: '17/01/2002'
    },
    
]);

  const [formType, setFormType] = React.useState<'create' | 'edit'>('create');

  const [editId, setEditId] = React.useState<number | null>(null);

  const handleCreate = (newPicturesElem: {PictureLikes: number, PictureTags: string, PictureDate: string, PictureImg: string;}) => {
    console.log('nuevo Elemento', newPicturesElem);

    //creamos un nuevo arreglo
    const newArray = [
      ...PicturesElem,//ponemos todos los elementos que ya existían
      {
        //creamos un nuevo elemento con la informacion recibida
        id: Math.random(),
        PictureImg: newPicturesElem.PictureImg,
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

  const handleBeginEdit = (editId: number) =>{
    setEditId(editId);
    console.log(editId);
    setFormType('edit');
  }

  const handleEdit = (editIdd: number, editPicturesElem: {
      PictureLikes: number;
      PictureTags: string;
    }) => {
      
      const newElemCopy = PicturesElem.slice();
      const editIndex = PicturesElem.findIndex((elem) =>{
        if(elem.id === editIdd){
          return true;
        }else{
          return false;
        }
      });
      newElemCopy[editIndex] = {
        ...PicturesElem[editIndex],
        ...editPicturesElem
      }

      setPicturesElem(newElemCopy);

    }

    // <!--<PicPrueba PicUrl={process.env.PUBLIC_URL + '/images/pexels-alex-kozlov-9291817.jpg'}></PicPrueba>-->

    //Para el album

    const [AlbumElem, setAlbumElem] = React.useState<AlbumElemArray[]>([
      {
        AlbumId: 0,
        AlbumCover: process.env.PUBLIC_URL + '/images/pexels-jill-burrow-6069745.jpg',
        AlbumTopic: 'Comida',
        AlbumName: 'Arabe'
      },
      {
        AlbumId: 1,
        AlbumCover: process.env.PUBLIC_URL + '/images/pexels-laura-tancredi-7078025.jpg',
        AlbumTopic: 'Latino',
        AlbumName: 'Cultura Colombiana'
      },
      {
        AlbumId: 2,
        AlbumCover: process.env.PUBLIC_URL + '/images/pexels-alex-kozlov-9291817.jpg',
        AlbumTopic: 'Latino',
        AlbumName: 'Cultura Colombiana'
      },
      {
        AlbumId: 3,
        AlbumCover: process.env.PUBLIC_URL + '/images/pexels-laura-tancredi-7078025.jpg',
        AlbumTopic: 'Latino',
        AlbumName: 'Cultura Colombiana'
      },
      {
        AlbumId: 4,
        AlbumCover: process.env.PUBLIC_URL + '/images/pexels-maria-orlova-4916259.jpg',
        AlbumTopic: 'Latino',
        AlbumName: 'Cultura Colombiana'
      },
    ]);

    const [albumFormType, setAlbumFormType] = React.useState<'create' | 'edit'>('create');

    const [editID, setEditID] = React.useState< number | null>(null);

    const handleAlbumCreate = (newAlbumElem: {AlbumCover: string, AlbumTopic: string, AlbumName: string}) => {
      console.log('nuevo Album', newAlbumElem);

      const newAlbumArray = [
        ...AlbumElem,
        {
          AlbumId: Math.random(),
          AlbumCover: newAlbumElem.AlbumCover,
          AlbumTopic: newAlbumElem.AlbumTopic,
          AlbumName: newAlbumElem.AlbumName
        }
      ];
      
      setAlbumElem(newAlbumArray);
    };

    const handleAlbumDelete = (DeleteId: number) => {
      console.log('delete');

      const AlbumElemCopy = AlbumElem.filter((elem) => {
          if(elem.AlbumId === DeleteId){
            return false;
          } else{
            return true;
          }
      });
      setAlbumElem(AlbumElemCopy);
    }

    const handleAlbumBeginEdit = (IdEdit: number) => {
      setEditID(IdEdit);
      console.log(IdEdit);
      setAlbumFormType('edit');
    }

    const handleAlbumEdit = (IdEditt: number, editAlbumElem: {AlbumCover: string, AlbumTopic: string, AlbumName: string}) => {
      const newAlbumCopy = AlbumElem.slice();
      const albumEditIndex = AlbumElem.findIndex((elem) => {
        if(elem.AlbumId === IdEditt){
          return true;
        }else{
          return false;
        }
      }); 
      newAlbumCopy[albumEditIndex] = {
        ...AlbumElem[IdEditt], ...editAlbumElem
      }
      setAlbumElem(newAlbumCopy);
    }



  return (
    <HashRouter>
    <div className="page">
     
        
      <Switch>
        <Route path='/landingPage'>
          <div className="Background">
            <div className="ButtonContainer">
              <Button buttonName="Fotografos" link='/Photographers'></Button>
              <Button buttonName="Fotos" link='/forms'></Button>
              <Button buttonName="Albums" link='/Albums'></Button>
            </div>
            <div className="seachSpace">
              <Search></Search>
            </div>
          </div>

          <h2 className='TagTitle'>Etiquetas</h2>
          <div className="tagSection">
            <Tag TagName='Paisajes'></Tag>
            <Tag TagName='Centro Comercial'></Tag>
            <Tag TagName='Paz'></Tag>
            <Tag TagName='Animales'></Tag>
            <Tag TagName='Electrodomésticos'></Tag>
            <Tag TagName='Cali'></Tag>
            <Tag TagName='Paisaje canadiense'></Tag>
            <Tag TagName='Peces'></Tag>
            <Tag TagName='Halloween'></Tag>
            <Tag TagName='Navidad'></Tag>
            <Tag TagName='Matrimonio'></Tag>
            <Tag TagName='Cultura colombiana'></Tag>
            <Tag TagName='Tropical'></Tag>
            <Tag TagName='Oceano'></Tag>
            <Tag TagName='selva'></Tag>
            <Tag TagName='Repostería'></Tag>
            <Tag TagName='Pasteles'></Tag>
            <Tag TagName='Calabaza'></Tag>
          </div>
          <div className="PictureSection">
              {PicturesElem.map((elem) => {
                return <Pictures key={elem.id}
                id={elem.id}
                PictureImg={elem.PictureImg}
                PictureLikes={elem.PictureLikes}
                PictureTags={elem.PictureTags}
                PictureDate={elem.PictureDate}
                type='detail'
                onDelete={handleDelete}
                onEdit={handleBeginEdit}/>
              })}
          </div>
        </Route>

        <Route path='/Photographers'>
          <div className='Background'>
            <div className="ButtonContainer">
              <Button buttonName="Fotografos" link='/Photographers'></Button>
              <Button buttonName="Fotos" link='/forms'></Button>
              <Button buttonName="Albumes" link='/Albums'></Button>
            </div>
          </div>
        </Route>

        <Route path='/Albums'>
          <div className='Background'>
            <div className="ButtonContainer">
              <Button buttonName="Fotografos" link='/Photographers'></Button>
              <Button buttonName="Fotos" link='/forms'></Button>
              <Button buttonName="Albumes" link='/Albums'></Button>
            </div>

            <div className='formsPage'>
              <div className='formsContainer'>
                <AlbumElemForms
                  editId={editID}
                  type={albumFormType}
                  onCreate={handleAlbumCreate}
                  onEdit={handleAlbumEdit}
                />
              </div>
            </div>

            <div className='AlbumSection'>
                {AlbumElem.map((elem) => {
                  return <Album key={elem.AlbumId}
                    AlbumId={elem.AlbumId}
                    AlbumCover={elem.AlbumCover}
                    AlbumName={elem.AlbumName}
                    AlbumTopic={elem.AlbumTopic}
                    type='detail'
                    onDelete={handleAlbumDelete}
                    onEdit={handleAlbumBeginEdit}
                  />
                })}
              </div>
          </div>
        </Route>

          <Route path='/forms'>
            
              <div className='Background'>
                <div className="ButtonContainer">
                  <Button buttonName="Fotografos" link='/Photographers'></Button>
                  <Button buttonName="Fotos" link='/forms'></Button>
                  <Button buttonName="Albumes" link='/Albums'></Button>
                </div>
                  
                  <div className='formsPage'>
                    <div className='formsContainer'>
                      <PictureElemForm 
                        editId={editId}
                        type= {formType}
                        onCreate={handleCreate}
                        onEdit={handleEdit}/>
                    </div>
                  </div>

                  <div className="PictureSection">
                    {PicturesElem.map((elem) => {
                    return <Pictures key={elem.id}
                    id={elem.id}
                    PictureImg={elem.PictureImg}
                    PictureLikes={elem.PictureLikes}
                    PictureTags={elem.PictureTags}
                    PictureDate={elem.PictureDate}
                    type='detail'
                    onDelete={handleDelete}
                    onEdit={handleBeginEdit}/>
                    })}
                  </div>
              </div>
            
          
            
          </Route>

          <Route path='/details/:id'>
            <PictureDetails
              list={PicturesElem}
            />
          </Route>

          <Route path='/404'>
              <Page404/>
          </Route>
          
          <Redirect to='/landingPage'/>
      </Switch>
    </div>
    </HashRouter>
  );
}

export default App;

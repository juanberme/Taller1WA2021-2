import React from 'react';
import './App.css';
import { Button } from './Button/Button';
import { Search } from './Search/Search';
import { Pictures} from './Pictures/Pictures';
import PictureElemForm from './PictureElemForm/PictureElemForm';
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom';
import PictureDetails from './PictureDetails/PictureDetails';
import Page404 from './Page404/Page404';
import { PicturesElemArray } from './PictureElemObj/PictureElemObj';
import Tag from './Tag/Tag';
import AlbumElemForms from './AlbumElemForms/AlbumElemForms';
import { AlbumElemArray } from './AlbumElemObj/AlbumElemObj';
import { Album } from './Album/Album';
import { PhotographerElemArray } from './PhotographerElemObj/PhotographerElemObj';
import PhotographerElemForms from './PhotographerElemForms/PhotographerElemForms';
import { Photographer } from './Photographer/Photographer';
import AlbumDetails from './AlbumDetails/AlbumDetails';
import PhotographerDetails from './PhotographerDetails/PhotographerDetails';
import { TagOptions } from './Tag/TagOptions';


function App() {

  const [tagsOptions, setTagsOptions] = React.useState<TagOptions[]>([
    {label: 'test 1'},
    {label: 'test 2'}
]);

const handleAddTagsOptions = (newTagsOptions: TagOptions) => {
  setTagsOptions([...tagsOptions, newTagsOptions]);
}

  const [PicturesElem, setPicturesElem ] = React.useState<PicturesElemArray[]>([
    {
      id: 0,
      PictureImg: process.env.PUBLIC_URL + '/images/pexels-alex-kozlov-9291817.jpg',
      PictureLikes: 211,
      PictureTags: [
        {label: 'streetstyle'},
        {label: 'ciudad'},
        {label: 'Bogotá'},
        {label: 'Soleado'},
      ],
      PictureDate: '27/10/2021',
      AlbumId: 2
    },
    {
      id: 1,
      PictureImg: process.env.PUBLIC_URL + '/images/nuevayork.jpg',
      PictureLikes: 326,
      PictureTags: [
        {label: 'Nueva York'},
        {label: 'Otoño'},
        {label: 'Rascacielos'},
      ],
      PictureDate: '16/9/2001',
      AlbumId: 3
    },
    {
      id: 2,
      PictureImg: process.env.PUBLIC_URL + '/images/trabajo.jpg',
      PictureLikes: 534,
      PictureTags: [
        {label: 'Estudio'},
        {label: 'Lapices'},
        {label: 'Cafe'},
        {label: 'Mañana'},
      ],
      PictureDate: '9/03/2000',
      AlbumId: 2
    },
    {
      id: 3,
      PictureImg: process.env.PUBLIC_URL + '/images/vino.jpg',
      PictureLikes: 526,
      PictureTags: [
        {label: 'Vino'},
        {label: 'Rosado'},
        {label: 'Aesthetic'},
      ],
      PictureDate: '10/9/2001',
      AlbumId: 2
    },
    {
      id: 4,
      PictureImg: process.env.PUBLIC_URL + '/images/familia.jpg',
      PictureLikes: 453,
      PictureTags: [
        {label: 'Bebe'},
        {label: 'Madre'},
        {label: 'Hogar'},
      ],
      PictureDate: '17/01/2002',
      AlbumId: 1
    },
    {
      id: 5,
      PictureImg: process.env.PUBLIC_URL + '/images/pexels-maria-orlova-4916259.jpg',
      PictureLikes: 236,
      PictureTags: [
        {label: 'Palacio'},
        {label: 'India'},
        {label: 'Blanco'},
      ],
      PictureDate: '17/01/2002',
      AlbumId: 1
    },
    
]);

  const [formType, setFormType] = React.useState<'create' | 'edit'>('create');

  const [editId, setEditId] = React.useState<number | null>(null);

  const handleCreate = (newPicturesElem: {PictureLikes: number, PictureTags: TagOptions[], PictureDate: string, PictureImg: string, AlbumId: number;}) => {
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
        PictureDate:newPicturesElem.PictureDate,
        AlbumId: newPicturesElem.AlbumId
      }
    ];

    setPicturesElem(newArray);
  }

  const handleDelete = (deleteId: number) =>{
    console.log('delete');

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
      PictureTags: TagOptions[];
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
        AlbumId: 1,
        PhotographerId: 1,
        AlbumCover: process.env.PUBLIC_URL + '/images/pexels-laura-tancredi-7078025.jpg',
        AlbumTopic: 'Latino',
        AlbumName: 'Cultura Colombiana'
      },
      {
        AlbumId: 2,
        PhotographerId: 1,
        AlbumCover: process.env.PUBLIC_URL + '/images/pexels-alex-kozlov-9291817.jpg',
        AlbumTopic: 'Culturas',
        AlbumName: 'Alemania'
      },
      {
        AlbumId: 3,
        PhotographerId: 0,
        AlbumCover: process.env.PUBLIC_URL + '/images/pexels-laura-tancredi-7078025.jpg',
        AlbumTopic: 'Viajes',
        AlbumName: 'Ciudades'
      },
      {
        AlbumId: 4,
        PhotographerId: 0,
        AlbumCover: process.env.PUBLIC_URL + '/images/pexels-maria-orlova-4916259.jpg',
        AlbumTopic: 'Ciudades',
        AlbumName: 'Medellín'
      },
    ]);

    const [albumFormType, setAlbumFormType] = React.useState<'create' | 'edit'>('create');

    const [editID, setEditID] = React.useState< number | null>(null);

    const handleAlbumCreate = (newAlbumElem: {AlbumCover: string, AlbumTopic: string, AlbumName: string, PhotographerId: number}) => {
      console.log('nuevo Album', newAlbumElem);

      const newAlbumArray = [
        ...AlbumElem,
        {
          AlbumId: Math.random(),
          PhotographerId: newAlbumElem.PhotographerId,
          AlbumCover: newAlbumElem.AlbumCover,
          AlbumTopic: newAlbumElem.AlbumTopic,
          AlbumName: newAlbumElem.AlbumName,
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



    //Para el fotografo

    const [PhotographerElem, setPhotographerElem] = React.useState<PhotographerElemArray[]>([
      {
        PhotographerId: 0,
        PhotographerImg: process.env.PUBLIC_URL + '/images/hombre.png',
        PhotographerSubs: 136,
        PhotographerName: 'Juan Perez'
      },
      {
        PhotographerId: 1,
        PhotographerImg: process.env.PUBLIC_URL + '/images/mujer.png',
        PhotographerSubs: 254,
        PhotographerName: 'Mariana Sandoval'
      },

    ]);

    const [PhotographerFormType, setPhotographerFormType] = React.useState<'create' | 'edit'>('create');
    
    const[PhotographerEditId, setPhotographerEditId] = React.useState<number | null> (null);

    const handlePhotographerCreate = (newPhotographerElem: {PhotographerImg: string, PhotographerSubs: number, PhotographerName: string}) => {
        console.log('nuevo Elemento', newPhotographerElem);

        const newPhotographerArray = [
          ...PhotographerElem, {
            PhotographerId: Math.random(),
            PhotographerImg: newPhotographerElem.PhotographerImg,
            PhotographerSubs: newPhotographerElem.PhotographerSubs,
            PhotographerName: newPhotographerElem.PhotographerName
          }
        ];

        setPhotographerElem(newPhotographerArray);
    }

    const handlePhotographerDelete = (PhotographerDeleteId: number) => {
      console.log('delete');

      const PhotographerElemCopy = PhotographerElem.filter((elem) => {
        if(elem.PhotographerId === PhotographerDeleteId){
          return false;
        }else{
          return true;
        }
      });
      setPhotographerElem(PhotographerElemCopy);
    }

    const handlePhotographerBeginEdit = (IdEdit: number) => {
      setPhotographerEditId(IdEdit);
      console.log(IdEdit);
      setPhotographerFormType('edit');
    }

    const handlePhotographerEdit = (editID: number, editPhotographerElem: {PhotographerSubs: number, PhotographerName: string}) => {
      const newPhotographerCopy = PhotographerElem.slice();
      const PhotographerEditIndex = PhotographerElem.findIndex((elem) => {
        if(elem.PhotographerId === editID){
          return true;
        }else{
          return false;
        }
      });
      newPhotographerCopy[PhotographerEditIndex] = {
        ...PhotographerElem[editID], ...editPhotographerElem
      }
      setPhotographerElem(newPhotographerCopy);
    }

    /*

  const [editId, setEditId] = React.useState<number | null>(null); */
  

  const totalTags = PicturesElem.map((elem) => elem.PictureTags).flat(); 

  return (
    <HashRouter>
    <div className="page">
     
        
      <Switch>
        <Route path='/landingPage'>
          <div className="Background">
            <div className='ButtonSpace'>
              <Button buttonName='Inicio' link='/landingPage'/>
              <div className="ButtonContainer">
                <Button buttonName="Fotografos" link='/Photographers'></Button>
                <Button buttonName="Fotos" link='/Pictures'></Button>
                <Button buttonName="Albumes" link='/Albums'></Button>
              </div>
            </div>
            <div className="seachSpace">
              <Search></Search>
            </div>
          </div>

          

          <h2 className='TagTitle'>Etiquetas</h2>
          <div className="tagSection">
            {totalTags.map((elem, index) => {
              return <Tag key={elem.label + index} TagName={elem.label}></Tag>
            })}
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
          <div className='ButtonSpace'>
            <Button buttonName='Inicio' link='/landingPage'/>
              <div className="ButtonContainer">
                <Button buttonName="Fotografos" link='/Photographers'></Button>
                <Button buttonName="Fotos" link='/Pictures'></Button>
                <Button buttonName="Albumes" link='/Albums'></Button>
              </div>
          </div>

            <div className='formsPage'>
              <div className='formsContainer'>
                  <PhotographerElemForms
                    editId={PhotographerEditId}
                    type={PhotographerFormType}
                    onCreate={handlePhotographerCreate}
                    onEdit={handlePhotographerEdit}
                  />
              </div>
            </div>

            <div className='PhotographerSection'>
                {PhotographerElem.map((elem) => {
                  return <Photographer key={elem.PhotographerId}
                    PhotographerId={elem.PhotographerId}
                    PhotographerSubs={elem.PhotographerSubs}
                    PhotographerImg={elem.PhotographerImg}
                    PhotographerName={elem.PhotographerName}
                    type='edit'
                    onDelete={handlePhotographerDelete}
                    onEdit={handlePhotographerBeginEdit}
                  />
                })}
            </div>
          </div>
        </Route>

        <Route path='/Albums'>
          <div className='Background'>
          <div className='ButtonSpace'>
            <Button buttonName='Inicio' link='/landingPage'/>
              <div className="ButtonContainer">
                <Button buttonName="Fotografos" link='/Photographers'></Button>
                <Button buttonName="Fotos" link='/Pictures'></Button>
                <Button buttonName="Albumes" link='/Albums'></Button>
              </div>
          </div>

            <div className='formsPage'>
              <div className='formsContainer'>
                <AlbumElemForms
                  editId={editID}
                  type={albumFormType}
                  onCreate={handleAlbumCreate}
                  onEdit={handleAlbumEdit}
                  Photographers={PhotographerElem}
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
                    type='edit'
                    onDelete={handleAlbumDelete}
                    onEdit={handleAlbumBeginEdit}
                  />
                })}
              </div>
          </div>
        </Route>

          <Route path='/Pictures'>
            
              <div className='Background'>
              <div className='ButtonSpace'>
              <Button buttonName='Inicio' link='/landingPage'/>
                <div className="ButtonContainer">
                  <Button buttonName="Fotografos" link='/Photographers'></Button>
                  <Button buttonName="Fotos" link='/Pictures'></Button>
                  <Button buttonName="Albumes" link='/Albums'></Button>
                </div>
              </div>
                  
                  <div className='formsPage'>
                    <div className='formsContainer'>
                      <PictureElemForm 
                        editId={editId}
                        type= {formType}
                        onCreate={handleCreate}
                        onEdit={handleEdit}
                        Albums={AlbumElem}
                        tagsOptions={tagsOptions}
                        addTagsOptions={handleAddTagsOptions}
                        />
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
                    type='edit'
                    onDelete={handleDelete}
                    onEdit={handleBeginEdit}/>
                    })}
                  </div>
              </div>
            
          
            
          </Route>

          <Route path='/details/:id'>
            <PictureDetails
              list={PicturesElem}
              photographerList={PhotographerElem}
              albumList={AlbumElem}
            />
          </Route>

          <Route path='/AlbumDetails/:id'>
            <AlbumDetails
              list={AlbumElem}
              pictures={PicturesElem}
              photographers={PhotographerElem}
            />
          </Route>

          <Route path='/PhotographerDetails/:id'>
            <PhotographerDetails 
            list={PhotographerElem}
            album={AlbumElem}
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

/*<Tag TagName='Paisajes'></Tag>
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
            <Tag TagName='Calabaza'></Tag>*/

export default App;

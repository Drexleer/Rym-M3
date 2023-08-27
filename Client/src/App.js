import { useState, useEffect } from 'react';
import './App.css';
import Cards from './components/Cards/Cards';
import Nav from './components/Nav/Nav';
import About from './components/Views/About.jsx';
import Detail from './components/Views/Detail.jsx';
import axios from 'axios';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import Error404 from './components/Error/Error404';
import Form from './components/Form/Form';
import Favorites from './components/Favorites/Favorites';

function App() {

   const [characters, SetCharacters] = useState([]); 
   
   const onSearch = async (id) =>{
      try {
         const {data} = await axios(`https://rickandmortyapi.com/api/character/${id}`);
         if(!characters.find((char)=> char.id === data.id)){
            if(data.name){
            SetCharacters((oldCharacters)=>[...oldCharacters, data]);
            }
            } else{ 
            window.alert(`Ya seleccionaste este personaje ${id}`);
            }
      }catch (error){
         alert(error.response.data);
      }
   }
   
   const onClose = (id) =>{
      SetCharacters(characters.filter(char => char.id !== id))
   }
   const {pathname} = useLocation();
   const [access, setAccess] = useState(false)
   const navigate = useNavigate()

   const EMAIL = "12@mail.com"
   const PASSWORD = "pass123"

   function login(userData) {
      const { email, password } = userData;
      const URL = 'http://localhost:3001/rickandmorty/login/';
      axios(`${URL}?email=${email}&password=${password}`)
      .then(({ data }) => {
         const { access } = data;
         setAccess(access);
         access && navigate('/home');
      });
   }
   
   useEffect(() => {
      !access && navigate('/');
   }, [access]);

   return (
      <div className='App'>
         {pathname !== '/' && pathname !== '/about' && <Nav onSearch= {onSearch}/>}
         <Routes>
            <Route path='/' element={<Form login={login}/>}/>
            <Route path='/home' element={<Cards characters={characters} onClose={onClose}/>}/> 
            <Route path='/about' element={<About/>}/>
            <Route path='/detail/:id' element={<Detail/>}/>
            <Route path='*' element={<Error404/>}/>
            <Route path='/favorites' element={<Favorites/>}/>
          </Routes>
      </div>
   );
}

export default App;

//* LOGIN SIN SERVIDOR
   // function login(userData) {
   //    if (userData.password === PASSWORD && userData.email === EMAIL) {
   //       setAccess(true);
   //       navigate('/home');
   //    } else {
   //       alert("Usuario o Contraseña incorrectos")
   //    }
   // }
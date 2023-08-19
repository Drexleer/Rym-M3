import { useState, useEffect } from 'react';
import {Button, MyCard, CardTitle, InnerCard, Side, FrontSide, BackSide, CardImage} from './styledCard';
import { Link } from 'react-router-dom';
import { addFav, removeFav } from '../../redux/actions';
import { connect } from 'react-redux';

function Card({name, status, species, gender, origin, image, onClose, id, addFav, removeFav, myFavorites}) {

   const [isFav, setIsFav] = useState(false)

   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === id) {
            setIsFav(true);
         }
      });
   }, [myFavorites]);

   const handleFavorite = () => {
      if(isFav) {
         setIsFav(false)
         removeFav(id)
      } else {
         setIsFav(true)
         addFav({name, status, species, gender, origin, image, id})
      }
   }

   return (
      <MyCard>
         <InnerCard>
         <Side>
            <FrontSide>
               <CardTitle>Nombre: {name}</CardTitle>
               <CardImage src={image} alt = {`No se encuentra la imagen de ${name}`}/>
            </FrontSide>
            </Side>
            <BackSide>
         <Link to={`/detail/${id}`}><h4>Status: {status}</h4> </Link>
         <h4>Specie: {species}</h4>
         <h4>Gender: {gender}</h4>
         <h4>Origin: {origin}</h4>
         {onClose && <Button onClick={() => onClose(id)}>❌</Button>}
         {
   isFav ? (
      <Button onClick={handleFavorite}>❤️</Button>
   ) : (
      <Button onClick={handleFavorite}>🤍</Button>
   )
}
         </BackSide>
         </InnerCard>
      </MyCard>
   );
}

export function mapStateToProps(state) {
   return {
      myFavorites: state.myFavorites
   }
}
export function mapDispatchToProps (dispatch) {
   return {
      addFav: function(character){
         dispatch(addFav(character))
      },
      removeFav: function(id){
         dispatch(removeFav(id))
      }
   }
}
export default connect(mapStateToProps, mapDispatchToProps)(Card)
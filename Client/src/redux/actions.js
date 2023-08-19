import axios from "axios";
import { ADD_FAV, REMOVE_FAV } from "./action-type"

// ACTION | addFav
export const addFav = (character) => {
    const endpoint = 'http://localhost:3001/rickandmorty/fav';
    return (dispatch) => {
       axios.post(endpoint, character)
       .then(({ data }) => {
          return dispatch({
             type: 'ADD_FAV',
             payload: data,
          });
       });
    };
 };

 // ACTION | removeFav
export const removeFav = (id) => {
   const endpoint = 'http://localhost:3001/rickandmorty/fav/' + id;
   return (dispatch) => {
      axios.delete(endpoint)
      .then(({ data }) => {
         return dispatch({
            type: 'REMOVE_FAV',
            payload: data,
      });
      });
   };
};


// Anteriores addfav y remove fav
//* Addfav sin servidor
// export const addFav = (payload) =>{
//     return {
//         type: ADD_FAV,
//         payload
//     }
// }
//*RemoveFav sin servidor
// export const removeFav = (payload) => {
//    return{
//        type: REMOVE_FAV,
//        payload
//    }
// }
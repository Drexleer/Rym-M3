import axios from "axios";
import React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
// import {Summary, DetailsModalOverlay, DetailsModal, Button, GlobalStyle} from './StyledDetail';

function Detail(){

    const {id} = useParams();
    
    const [characterDetail, setCharacterDetail] = useState({});
    useEffect(() => {
        axios(`https://rickandmortyapi.com/api/character/${id}`)
        .then(({ data }) => {
            if(data.name) {
                setCharacterDetail(data);
            } else {
                window.alert('No hay personajes con ese ID')
            }
        });
        return setCharacterDetail({});
    }, [id]);

    return(
        <div>
            <h2 style={{color: 'white'}}>Nombre: {characterDetail.name} </h2>
            <h4>{characterDetail.status}</h4>
            <h4>{characterDetail.species}</h4>
            <h4>{characterDetail.gender}</h4>
            <h4>{characterDetail.origin?.name}</h4>
            <img src={characterDetail.image} alt=""/>
        </div>
    )
}

export default Detail;
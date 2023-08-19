import React from 'react'
import { connect } from 'react-redux'
import Card from '../Card/Card'

function Favorites({myFavorites}) {
  return (
    <div>{
        myFavorites?.map(({id, gender, species, status, image, name, origin}) => (<Card
            key={id}
            id={id}
            name={name}
            image={image}
            species={species}
            status={status}
            gender={gender}
            origin={origin}
        />))
        }</div>
  )
}

function mapStateToProps(state) {
    return{
        myFavorites: state.myFavorites
    }
}

export default connect(mapStateToProps)(Favorites)
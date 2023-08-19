import { useState } from 'react';
import {Container, Input, SearchButton} from './styledSearchBar'
import { FiCornerDownRight } from 'react-icons/fi';

export default function SearchBar({onSearch}) {

const [id, setId] = useState('')

const handleChange = (event) => {
   setId(event.target.value)
}

const handleSearch = (id) => {
   onSearch(id)
   setId('')
}

   return (
      <Container>
         <Input id = 'inputSearch' value={id} type='search' placeholder="Ingresa un ID" onChange={handleChange}/>
         <SearchButton onClick={()=>{handleSearch(id)}}><FiCornerDownRight/></SearchButton>
      </Container>
   );
}

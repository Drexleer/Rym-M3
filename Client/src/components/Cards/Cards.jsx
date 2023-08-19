import {CardContainers} from './styledCards';
import Card from '../Card/Card';
export default function Cards({characters, onClose}) {
   return ( 
      <CardContainers>
      {characters.map(character => 
         <Card
            key= {character.id}
            id={character.id}
            name={character.name}
            status ={character.status}
            species={character.species}
            gender={character.gender}
            origin={character.origin.name}
            image={character.image}
            onClose={onClose}
         />
      )}
      </CardContainers>
   );
}

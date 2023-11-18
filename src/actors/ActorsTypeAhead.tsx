import { Typeahead } from "react-bootstrap-typeahead";
import { movieActorsDTO } from "./actors.model";

export default function ActorsTypeAhead(props: actorsTypeAheadProps) {

    const actors: movieActorsDTO[] = [
        {
            id: 1, name: 'Felipe', character: '', photo: 'https://m.media-amazon.com/images/M/MV5BNzZiNTEyNTItYjNhMS00YjI2LWIwMWQtZmYwYTRlNjMyZTJjXkEyXkFqcGdeQXVyMTExNzQzMDE0._V1_UY1200_CR85,0,630,1200_AL_.jpg'
        },
        {
            id: 2, name: 'Fernando', character: '', photo: 'https://otakukart.com/wp-content/uploads/2020/05/cropped-1920-1080-47698.png'
        },
        {
            id: 3, name: 'Roberto', character: '', photo: 'https://static0.cbrimages.com/wordpress/wp-content/uploads/2018/05/animes.jpg'
        }
    ]
    return (
        <>
            <label>Actors</label>
            <Typeahead 
                id="typeahead" 
                minLength={2} 
                onChange={actor => { console.log(actor) }} 
                options={actors} 
                labelKey={actors => actors.name} 
                filterBy={['name']} 
                placeholder="Write Actors names..."
                flip={true}    
            />
        </>
    )
}


interface actorsTypeAheadProps {
    actors: movieActorsDTO[];
}
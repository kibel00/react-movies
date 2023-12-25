import { Typeahead } from "react-bootstrap-typeahead";
import { movieActorsDTO } from "./actors.model";
import { ReactElement, useState } from "react";

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

    const selection: movieActorsDTO[] = [];

    const [draggedElement, setDraggedElement] = useState<movieActorsDTO | undefined>(undefined)

    function manageDragStart(actor: movieActorsDTO) {
        setDraggedElement(actor);
    }

    function manageDragOver(actor: movieActorsDTO) {
        if (!draggedElement) {
            return;
        }

        if (actor.id !== draggedElement.id) {
            const draggedElementIndex = props.actors.findIndex(x => x.id === draggedElement.id);

            const actorIndex = props.actors.findIndex(x => x.id === actor.id);

            const actors = [...props.actors];
            actors[actorIndex] = draggedElement;
            actors[draggedElementIndex] = actor;
            props.onAdd(actors);
        }
    }
    return (
        <>
            <label>Actors</label>
            <Typeahead
                id="typeahead"
                minLength={2}
                onChange={actors => {
                    if (props.actors.findIndex(x => x.id === actors[0].id) === -1) {
                        props.onAdd([...props.actors, actors[0]])
                    }
                }}
                options={actors}
                labelKey={actors => actors.name}
                filterBy={['name']}
                placeholder="Write Actors names..."
                flip={true}
                selected={selection}
                renderMenuItemChildren={actors => (
                    <>
                        <img alt="Actors image" src={actors.photo}
                            style={{
                                height: '64px',
                                marginRight: '10px',
                                width: '64px'
                            }}
                        />
                        <span>{actors.name}</span>
                    </>
                )}
            />
            <ul className="list-group">
                {props.actors.map(x => <li
                    draggable={true}
                    onDragStart={() => manageDragStart(x)}
                    onDragOver={() => manageDragOver(x)}
                    className="list-group-item list-group-item-action" key={x.id}>{props.ListUI(x)}
                    <span className="badge badge-primary badge-pill" style={{ marginLeft: '0.5rem', cursor: 'pointer' }} onClick={() => props.onRemove(x)}>
                        X
                    </span>
                </li>)}
            </ul>
        </>
    )
}


interface actorsTypeAheadProps {
    actors: movieActorsDTO[];
    onAdd(actors: movieActorsDTO[]): void;
    ListUI(actor: movieActorsDTO): ReactElement;
    onRemove(actor: movieActorsDTO): void;
}
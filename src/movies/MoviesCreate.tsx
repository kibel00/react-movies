import { genresDTO } from "../genres/Genres.Model";
import { thearesDTO } from "../theares/theares.model";

import MovieForm from "./MovieForm";

export default function MoviesCreate() {
    const genres: genresDTO[] = [{ id: 1, name: 'Action' }, { id: 2, name: 'Drama' }, { id: 3, name: 'Comedy' }]
    const theares: thearesDTO[] = [{ id: 1, name: 'Agora' }, { id: 2, name: 'Sambil' }]
    return (
        <>
            <h3>Create Movies</h3>
            <MovieForm selectedActors={[]} noSeletectTheares={theares} seletectTheares={[]} selectedGenres={genres} noSelectedGenres={[]} model={{ title: '', movieInTheaters: false, trailer: '' }} onSubmit={values => console.log(values)} />
        </>
    )
}
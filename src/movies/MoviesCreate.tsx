import { genresDTO } from "../genres/Genres.Model";

import MovieForm from "./MovieForm";

export default function MoviesCreate() {
    const genres: genresDTO[] = [{ id: 1, name: 'Action' }, { id: 2, name: 'Drama' }, { id: 3, name: 'Comedy' }]
    return (
        <>
            <h3>Create Movies</h3>
            <MovieForm selectedGenres={genres} noSelectedGenres={[]} model={{ title: '', movieInTheaters: false, trailer: '' }} onSubmit={values => console.log(values)} />
        </>
    )
}
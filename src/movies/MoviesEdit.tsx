import { genresDTO } from "../genres/Genres.Model";
import MovieForm from "./MovieForm";

export default function MoviesEdit() {
    const SeletedGenres: genresDTO[] = [{ id: 1, name: 'Action' }, { id: 3, name: 'Comedy' }]
    const noSeletedGenres: genresDTO[] = [{ id: 2, name: 'Drama' }]

    return (
        <>
            <h3>Edit Movies</h3>
            <MovieForm selectedGenres={SeletedGenres} noSelectedGenres={noSeletedGenres} model={{ title: 'Spider-man', movieInTheaters: true, trailer: 'url', releaseDate: new Date('2019-01-01T00:00:00') }} onSubmit={values => console.log(values)} />
        </>
    )
}
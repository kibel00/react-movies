import { movieActorsDTO } from "../actors/actors.model";
import { genresDTO } from "../genres/Genres.Model";
import { thearesDTO } from "../theares/theares.model";
import MovieForm from "./MovieForm";

export default function MoviesEdit() {
    const SeletedGenres: genresDTO[] = [{ id: 1, name: 'Action' }, { id: 3, name: 'Comedy' }]
    const noSeletedGenres: genresDTO[] = [{ id: 2, name: 'Drama' }]

    const seletectTheares: thearesDTO[] = [{ id: 2, name: 'Sambil' }]
    const noSeletectTheares: thearesDTO[] = [{ id: 2, name: 'Sambil' }]

    const selectedActors: movieActorsDTO[] = [
        {
            id: 1, name: 'Felipe', character: '', photo: 'https://m.media-amazon.com/images/M/MV5BNzZiNTEyNTItYjNhMS00YjI2LWIwMWQtZmYwYTRlNjMyZTJjXkEyXkFqcGdeQXVyMTExNzQzMDE0._V1_UY1200_CR85,0,630,1200_AL_.jpg'
        },
    ]

    return (
        <>
            <h3>Edit Movies</h3>
            <MovieForm selectedActors={selectedActors} seletectTheares={seletectTheares} noSeletectTheares={noSeletectTheares} selectedGenres={SeletedGenres} noSelectedGenres={noSeletedGenres} model={{ title: 'Spider-man', movieInTheaters: true, trailer: 'url', releaseDate: new Date('2019-01-01T00:00:00') }} onSubmit={values => console.log(values)} />
        </>
    )
}
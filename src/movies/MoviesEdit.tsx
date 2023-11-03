import MovieForm from "./MovieForm";

export default function MoviesEdit() {
    return (
        <>
            <h3>Edit Movies</h3>
            <MovieForm model={{ title: 'Spider-man', movieInTheaters: true, trailer: 'url', releaseDate: new Date('2019-01-01T00:00:00') }} onSubmit={values => console.log(values)} />
        </>
    )
}
import MovieForm from "./MovieForm";

export default function MoviesCreate() {
    return (
        <>
            <h3>Create Movies</h3>
            <MovieForm model={{ title: '', movieInTheaters: false, trailer: '' }} onSubmit={values => console.log(values)} />
        </>
    )
}
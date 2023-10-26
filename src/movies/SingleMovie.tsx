import { movie } from "./movies.model";
import SingleMovieCss from "./SingleMovie.module.css"

export default function SingleMovie(props: singleMovieProps) {

    const buildLink = () => `/movie/${props.movie.id}`;

    return (
        <div className={SingleMovieCss.div}>
            <a href={buildLink()}>
                <img src={props.movie.poster} alt="poster" />
            </a>
            <p>
                <a href={buildLink()}>{props.movie.title}</a>
            </p>
        </div>
    )
}


interface singleMovieProps {
    movie: movie;
}
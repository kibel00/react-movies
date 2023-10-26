import { useState, useEffect } from "react";
import { landingPageDTO } from "./movies/movies.model";
import MoviesList from "./movies/MoviesList";
import React from "react";

export default function LandigPage() {
    const [movies, setMovies] = useState<landingPageDTO>({});

    useEffect(() => {
        const timerId = setTimeout(() => {
            setMovies({
                movieInTheaters: [
                    {
                        id: 1, title: 'Spider-Man far from home', poster: 'https://th.bing.com/th/id/OIP.0XqHW-SLjOdSAlU0_gL51gHaK-?w=205&h=304&c=7&r=0&o=5&dpr=1.3&pid=1.7'
                    },
                    {
                        id: 2, title: 'Moana', poster: 'https://th.bing.com/th/id/R.e7d875bcaff6b45efd50fad2c764d559?rik=5Ggk1u9SOQ6jzQ&riu=http%3a%2f%2fwww.blackfilm.com%2fread%2fwp-content%2fuploads%2f2016%2f09%2fMoana-poster-2.jpg&ehk=a9UbhP0TuuI4eVwIqQKKvdLjxdqmmasIGm%2fs%2bJRxTJY%3d&risl=&pid=ImgRaw&r=0'
                    }
                ],
                upComingReleases: [
                    {
                        id: 3, title: 'Soul', poster: 'https://th.bing.com/th/id/OIP.-4MsBoeEePyUL_WDyX2Z1gHaJQ?w=207&h=259&c=7&r=0&o=5&dpr=1.3&pid=1.7'
                    }
                ]
            })
        }, 1000);
        return () => clearTimeout(timerId);
    })


    return (
        <>
            <h3>In theaters</h3>
            <MoviesList movie={movies.movieInTheaters} />
            <h3>Upcoming Releases</h3>
            <MoviesList movie={movies.upComingReleases} />
        </>
    )
}
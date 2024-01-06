import axios, { AxiosResponse } from "axios";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { genresDTO } from "./Genres.Model";
import { genderUrl } from "../utils/endpoints";

export default function GenresIndex() {
    useEffect(() => {
        axios.get(genderUrl)
            .then((answer: AxiosResponse<genresDTO[]>) => {
                console.log(answer.data)
            })
    }, [])
    return (
        <>
            <h3>Genres Index</h3>
            <Link to="/genres/create">Create Genres</Link>
        </>
    )
}
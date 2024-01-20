import axios from "axios";
import { genresCreateDTO } from "./Genres.Model";
import GenresForm from "./GenresForm";
import { genderUrl } from "../utils/endpoints";
import { useNavigate } from "react-router-dom";
import ShowError from "../utils/ShowError";
import { useState } from "react";

export default function GenresCreate() {
    const navigate = useNavigate();

    const [errors, setErrors] = useState<string[]>([]);


    async function create(genres: genresCreateDTO) {
        try {
            await axios.post(genderUrl, genres);
            navigate("/genres");
        } catch (error) {
            setErrors(error.response.data)
        }
    }

    return (
        <>
            <h3>Create Genres</h3>
            <ShowError errors={errors} />
            <GenresForm model={{ name: '' }} onSubmit={async values => {
                await create(values);
            }} />
        </>
    )
}
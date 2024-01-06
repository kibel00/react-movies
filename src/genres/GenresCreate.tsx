import axios from "axios";
import { genresCreateDTO } from "./Genres.Model";
import GenresForm from "./GenresForm";
import { genderUrl } from "../utils/endpoints";
import { useNavigate } from "react-router-dom";

export default function GenresCreate() {
    const navigate = useNavigate();


    async function create(genres: genresCreateDTO) {
        try {
            await axios.post(genderUrl, genres);
            navigate("/genres");
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <>
            <h3>Create Genres</h3>
            <GenresForm model={{ name: '' }} onSubmit={async values => {
                await create(values);
            }} />
        </>
    )
}
import axios, { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { genresDTO } from "./Genres.Model";
import { genderUrl } from "../utils/endpoints";
import GenericList from "../utils/GenericList";
import Button from "../utils/Button";

export default function GenresIndex() {

    const [genders, setGenders] = useState<genresDTO[]>();

    useEffect(() => {
        axios.get(genderUrl)
            .then((answer: AxiosResponse<genresDTO[]>) => {
                setGenders(answer.data);
            })
    }, [])
    return (
        <>
            <h3>Genres</h3>
            <Link className="btn btn-primary" to="/genres/create">Create Genres</Link>

            <GenericList list={genders}>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>Action</th>
                            <th>Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        {genders?.map(x => <tr key={x.id}>
                            <td>
                                <Link className="btn btn-success" to={`/genres/${x.id}`}>
                                    Edit
                                </Link>
                                <Button className="btn btn-danger">Delete</Button>
                            </td>
                            <td>
                                {x.name}
                            </td>
                        </tr>)}
                    </tbody>
                </table>
            </GenericList>
        </>
    )
}
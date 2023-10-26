import { Link } from "react-router-dom";

export default function ActorsIndex() {
    return (
        <>
            <h3>Index Actors</h3>
            <Link to="/actors/create">Create Actors</Link>
        </>
    )
}
import GenresForm from "./GenresForm";

export default function GenresCreate() {
    return (
        <>
            <h3>Create Genres</h3>
            <GenresForm model={{name: ''}} onSubmit={async values => {
                await new Promise(result => setTimeout(result, 3000));
                console.log(values);
            }} />
        </>
    )
}


// interface genresCreateProps {
//     model: genresCreateDTO;
//     onSubmit?(): genresCreateDTO
// }
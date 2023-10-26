import GenresForm from "./GenresForm";

export default function GenresEdit(props: genresCreateProps) {
    return (
        <>
            <h3>Edit Genres</h3>
            <GenresForm model={{ name: '' }}
                onSubmit={async values => {
                    await new Promise(result => setTimeout(result, 3000));
                    console.log(values);
                }} />
        </>
    )
}


interface genresCreateProps {

}
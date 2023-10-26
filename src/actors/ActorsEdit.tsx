import ActorsForm from "./ActorsForm";

export default function ActorsEdit() {
    return (
        <>
            <h3>Edit Actors</h3>
            <ActorsForm model={{ name: 'Tom Holland', birthDate: new Date('1996-06-01-T:00:00:00') }} onSubmit={values => console.log(values)} />
        </>
    )
}
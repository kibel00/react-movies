import ActorsForm from "./ActorsForm";

export default function ActorsCreate() {
    return (
        <>
            <h3>Create Actors</h3>
            <ActorsForm model={{ name: '', birthDate: undefined }} onSubmit={values => console.log(values)} />
        </>
    )
}
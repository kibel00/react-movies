import ThearesForm from "./ThearesForm";

export default function ThearesEdit() {
    return (
        <>
            <h3>Edit Theares</h3>
            <ThearesForm model={{ name: 'Sambil', latitude: 18.572515734572168, longitude: -69.86645507786308 }} onSubmit={values => console.log(values)} />
        </>
    )
}
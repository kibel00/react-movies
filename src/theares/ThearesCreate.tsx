import ThearesForm from "./ThearesForm";

export default function ThearesCreate() {
    return (
        <>
            <h3>Create Theares</h3>
            <ThearesForm model={{ name: '' }} onSubmit={values => console.log(values)} />
        </>
    )
}
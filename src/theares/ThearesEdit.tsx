import ThearesForm from "./ThearesForm";

export default function ThearesEdit() {
    return (
        <>
            <h3>Edit Theares</h3>
            <ThearesForm model={{ name: 'Sambil' }} onSubmit={values => console.log(values)} />
        </>
    )
}
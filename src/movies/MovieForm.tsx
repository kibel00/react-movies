import { Form, Formik, FormikHelpers } from "formik";
import { movieCreateDTO } from "./movies.model";
import * as Yup from 'yup';
import FormGroupText from "../utils/FormGroupText";
import FormGroupCheckBox from "../utils/FormGroupCheckBox";
import FormGroupDate from "../utils/FormGroupDate";
import FormGroupImage from "../utils/FormGroupImage";
import Button from "../utils/Button";
import { Link } from "react-router-dom";

function MovieForm(props: movieFormProps) {
    return (
        <Formik initialValues={props.model} onSubmit={props.onSubmit} validationSchema={Yup.object({
            title: Yup.string().required('This field is requried').firstCapLetter(),
        })}>


            {(formikProps) => (
                <Form>
                    <FormGroupText label="Title" field="title" />
                    <FormGroupCheckBox label="In Theaters" field="movieInTheaters" />
                    <FormGroupText label="Trailer" field="trailer" />
                    <FormGroupDate label="Release Date" field="releaseDate" />
                    <FormGroupImage label="Poster" field="poster" imageUrl={props.model.posterUrl} />
                    <Button disabled={formikProps.isSubmitting} type="submit">Send</Button>
                    <Link className="btn btn-secondary" to="/">Cancel</Link>
                </Form>
            )}
        </Formik>
    )
}


interface movieFormProps {
    model: movieCreateDTO;
    onSubmit(values: movieCreateDTO, action: FormikHelpers<movieCreateDTO>): void;
}


export default MovieForm;
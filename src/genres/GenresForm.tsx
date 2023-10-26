import { Form, Formik, FormikHelpers } from "formik";
import { Link } from "react-router-dom";
import * as Yup from 'yup';
import Button from "../utils/Button";
import FormGroupText from "../utils/FormGroupText";
import { genresCreateDTO } from "./Genres.Model";

export default function GenresForm(props: genresFormProps) {
    return (
        <Formik initialValues={props.model}
            onSubmit={props.onSubmit}


            validationSchema={Yup.object({
                name: Yup.string().required('This field is requried').firstCapLetter()
            })}
        >

            {(formikProps) => (
                <Form>
                    <FormGroupText field="name" label="Name" />
                    <Button disabled={formikProps.isSubmitting} type="submit">Save</Button>
                    <Link className="btn btn-secondary" to="/genres">Cancel</Link>
                </Form>
            )}

        </Formik>
    )
}

interface genresFormProps {
    model: genresCreateDTO;
    onSubmit(values: genresCreateDTO, action: FormikHelpers<genresCreateDTO>): void;
}
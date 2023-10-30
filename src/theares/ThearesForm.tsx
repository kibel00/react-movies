import { Form, Formik, FormikHelpers } from "formik";
import { thearesCreateDTO } from "./theares.model";
import * as Yup from 'yup';
import FormGroupText from "../utils/FormGroupText";
import Button from "../utils/Button";
import { Link } from "react-router-dom";

export default function ThearesForm(props: thearesFormProps) {
    return (
        <Formik initialValues={props.model} onSubmit={props.onSubmit} validationSchema={Yup.object({
            name: Yup.string().required('This field is required').firstCapLetter()
        })}>

            {(formkiProps) => (
                <Form>
                    <FormGroupText field="name" label="Name" />
                    <Button disabled={formkiProps.isSubmitting} type="submit">Save</Button>
                    <Link className="btn btn-secondary" to="/theares">Cancel</Link>
                </Form>
            )}
        </Formik>
    )
}


interface thearesFormProps {
    model: thearesCreateDTO;
    onSubmit(values: thearesCreateDTO, action: FormikHelpers<thearesCreateDTO>): void;
}
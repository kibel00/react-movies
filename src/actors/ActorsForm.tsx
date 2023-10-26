import { Form, Formik, FormikHelpers } from "formik";
import { actorCreateDTO } from "./actors.model";
import FormGroupText from "../utils/FormGroupText";
import Button from "../utils/Button";
import { Link } from "react-router-dom";
import * as Yup from 'yup';
import FormGroupDate from "../utils/FormGroupDate";

export default function ActorsForm(props: actorsFormProps) {
    return (
        <>
            <Formik initialValues={props.model} onSubmit={props.onSubmit}
                validationSchema={Yup.object({
                    name: Yup.string().required('This field is required').firstCapLetter(),
                    birthDate: Yup.date().nullable().required('This field is required')
                })}
            >

                {(formikProps) => (
                    <Form>
                        <FormGroupText field="name" label="Name" />
                        <FormGroupDate field="birthDate" label="Date of birth" />
                        <Button disabled={formikProps.isSubmitting} type="submit">Save</Button>
                        <Link className="btn btn-secondary" to="/actors">Cancel</Link>
                    </Form>
                )}
            </Formik>
        </>
    )
}


interface actorsFormProps {
    model: actorCreateDTO;
    onSubmit(values: actorCreateDTO, action: FormikHelpers<actorCreateDTO>): void;
}
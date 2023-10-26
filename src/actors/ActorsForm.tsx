import { Form, Formik, FormikHelpers } from "formik";
import { actorCreateDTO } from "./actors.model";
import FormGroupText from "../utils/FormGroupText";
import Button from "../utils/Button";
import { Link } from "react-router-dom";
import * as Yup from 'yup';

export default function ActorsForm(props: actorsFormProps) {
    return (
        <>
            <Formik initialValues={props.model} onSubmit={props.onSubmit}
                validationSchema={Yup.object({
                    name: Yup.string().required('This field is required').firstCapLetter()
                })}
            >

                {(formikProps) => (
                    <Form>
                        <FormGroupText field="name" label="Name" />
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
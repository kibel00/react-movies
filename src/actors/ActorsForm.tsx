import { Form, Formik, FormikHelpers } from "formik";
import { actorCreateDTO } from "./actors.model";
import FormGroupText from "../utils/FormGroupText";
import Button from "../utils/Button";
import { Link } from "react-router-dom";
import * as Yup from 'yup';
import FormGroupDate from "../utils/FormGroupDate";
import FormGroupImage from "../utils/FormGroupImage";

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
                        <FormGroupImage field="image" label="Photo" imageUrl="https://m.media-amazon.com/images/M/MV5BNzZiNTEyNTItYjNhMS00YjI2LWIwMWQtZmYwYTRlNjMyZTJjXkEyXkFqcGdeQXVyMTExNzQzMDE0._V1_UY1200_CR85,0,630,1200_AL_.jpg"/>
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
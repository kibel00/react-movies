import { Field, Form, Formik, FormikHelpers } from "formik";
import { Link } from "react-router-dom";
import * as Yup from 'yup';
import Button from "../utils/Button";
import { genresCreateDTO } from "./Genres.Model";

export default function GenresForm(props: genresFormProps) {
    return (
        <Formik initialValues={props.model}
            onSubmit={props.onSubmit}


            validationSchema={Yup.object({
                name: Yup.string().required('This field is requried')
            })}
        >
            <Form>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <Field name="name" className="form-control" />
                </div>
                <Button type="submit">Save</Button>
                <Link className="btn btn-primary" to="/genres">Cancel</Link>
            </Form>
        </Formik>
    )
}

interface genresFormProps {
    model: genresCreateDTO;
    onSubmit(values: genresCreateDTO, action: FormikHelpers<genresCreateDTO>): void;
}
import { Form, Formik, FormikHelpers } from "formik";
import { Link } from "react-router-dom";
import * as Yup from 'yup';
import Button from "../utils/Button";
import FormGroupText from "../utils/FormGroupText";
import MapForm from "../utils/MapForm";
import { thearesCreateDTO } from "./theares.model";
import { coordenatesDTO } from "../utils/coordenates.model";

export default function ThearesForm(props: thearesFormProps) {

    function transFormCoordenate(): coordenatesDTO[] | undefined {
        if (props.model.latitude && props.model.longitude) {
            const answer: coordenatesDTO = { lat: props.model.latitude, lng: props.model.longitude }
            return [answer];
        }
        return undefined;
    }
    return (
        <Formik initialValues={props.model} onSubmit={props.onSubmit} validationSchema={Yup.object({
            name: Yup.string().required('This field is required').firstCapLetter()
        })}>
            {(formkiProps) => (
                <Form>
                    <FormGroupText field="name" label="Name" />
                    <div style={{ marginBottom: '1rem' }}>
                        <MapForm fielLat="latitude" fieldLng="longitude" coordenate={transFormCoordenate()} />
                    </div>
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
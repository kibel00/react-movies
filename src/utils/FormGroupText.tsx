import { Field, ErrorMessage } from "formik";
import ShowErrorField from "./ShowErrorField";

export default function FormGroupText(props: formGroupText) {
    return (
        <>
            <div className="form-group">
                {props.label ? <label htmlFor={props.field}>{props.label}</label> : null}
                <Field name={props.field} className="form-control" />
                <ErrorMessage name={props.field}>{message =>
                    <ShowErrorField message={message} />
                }</ErrorMessage>
            </div>
        </>
    )
}


interface formGroupText {
    field: string;
    label?: string;
    placeholder?: string;
}
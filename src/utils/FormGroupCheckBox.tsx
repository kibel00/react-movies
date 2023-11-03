import { Field } from "formik";

export default function FormGroupCheckBox(props: formGroupCheckBoxProps) {
    return (
        <div className="form-group form-check">
            <Field className="form-check-input" id={props.field} name={props.field} type="checkbox" />
            <label htmlFor={props.field}>{props.label}</label>
        </div>
    )

}


interface formGroupCheckBoxProps {
    label: string;
    field: string;
}
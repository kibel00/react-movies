import { Field, useFormikContext } from "formik";
import Markdown from "react-markdown";
import './FormGroupMarkDown.css'

function FormGroupMarckDown(props: formGroupMarkDownProps) {
    const { values } = useFormikContext<any>();

    return (
        <>
            <div className="form-group form-markdown">
                <div>
                    <label>{props.label}</label>
                    <div>
                        <Field name={props.field} as="textarea" className="form-textarea" />
                    </div>
                </div>
                <div>
                    <label>{props.label} (Preview)</label>
                    <div className="markdown-container">
                        <Markdown>{values[props.field]}</Markdown>
                    </div>
                </div>
            </div>
        </>
    )
}

export default FormGroupMarckDown;


interface formGroupMarkDownProps {
    field: string;
    label: string;
}
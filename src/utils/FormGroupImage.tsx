import { useFormikContext } from "formik";
import { ChangeEvent, useState } from "react";

function FormGroupImage(props: formGroupImageProps) {

    const divStyle = { marginTop: '10px' };
    const imgStyle = { width: '450px' };

    const [imageBase64, setimageBase64] = useState('');
    const [imageUrl, setimageUrl] = useState(props.imageUrl);
    const { values } = useFormikContext<any>();

    const manageOnChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.currentTarget.files) {
            const file = e.currentTarget.files[0];
            toBase64(file).then((representationBase64: string) => setimageBase64(representationBase64))
                .catch(error => console.log(error))

            values[props.field] = file;
            setimageUrl('');
        }
    }

    const toBase64 = (file: File) => {
        return new Promise<string>((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => resolve(reader.result as string);
            reader.onerror = (error) => reject(error);
        })
    }

    return (
        <div className="form-group">
            <label>{props.label}</label>
            <div>
                <input type="file" accept=".jpg,.jpeg,.png" onChange={manageOnChange} />
            </div>
            {imageBase64 ? <div>
                <div style={divStyle}>
                    <img style={imgStyle} src={imageBase64} alt="Selected image" />
                </div>
            </div> : null}

            {imageUrl ? <div>
                <div style={divStyle}>
                    <img style={imgStyle} src={imageUrl} alt="Selected image" />
                </div>
            </div> : null}
        </div>
    )
}


export default FormGroupImage;

interface formGroupImageProps {
    field: string;
    label: string;
    imageUrl?: string;
}


FormGroupImage.defaultProps = {
    imageUrl: ''
}
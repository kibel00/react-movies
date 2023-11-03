import { useFormikContext } from "formik";
import MapComponent from "./MapComponent";
import { coordenatesDTO } from "./coordenates.model";

function MapForm(props: mapFormProps) {

    const { values } = useFormikContext<any>();

    function updateField(coordenate: coordenatesDTO) {
        values[props.fielLat] = coordenate.lat;
        values[props.fieldLng] = coordenate.lng;
    }
    
    return (
        <MapComponent coordenates={props.coordenate} manageMapClick={updateField} />
    )
}

interface mapFormProps {
    coordenate: coordenatesDTO[];
    fielLat: string;
    fieldLng: string
}


MapForm.defaultProps = {
    coordenate: []
}

export default MapForm;
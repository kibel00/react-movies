import { MapContainer, Marker, TileLayer, useMapEvent } from "react-leaflet";
import L from 'leaflet';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
import 'leaflet/dist/leaflet.css'
import { coordenatesDTO } from "./coordenates.model";
import { useState } from "react";

let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow,
    iconAnchor: [16, 37]
});

L.Marker.prototype.options.icon = DefaultIcon;

function MapComponent(props: mapProps) {
    const [coordenates, setCoordenates] = useState<coordenatesDTO[]>(props.coordenates);
    return (
        <MapContainer center={[18.565277, -69.855946]} zoom={14} style={{ height: props.height }}>
            <TileLayer attribution="React movies" url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"></TileLayer>


            <ClickMapComponent setPoint={coordenates => {
                setCoordenates([coordenates]);
                props.manageMapClick(coordenates);
            }} />

            {coordenates.map(x => <MarkerComponent {...x} key={x.lat + x.lng} />)}
        </MapContainer>
    )
}

function ClickMapComponent(props: clickMapComponentProps) {
    useMapEvent('click', e => {
        props.setPoint({ lat: e.latlng.lat, lng: e.latlng.lng })
    })
    return null;
}

interface clickMapComponentProps {
    setPoint(coordinates: coordenatesDTO): void;
}

function MarkerComponent(props: coordenatesDTO) {
    return (
        <Marker position={[props.lat, props.lng]} />
    )
}

interface mapProps {
    height: string;
    coordenates: coordenatesDTO[];
    manageMapClick(coordenates: coordenatesDTO): void;
}

MapComponent.defaultProps = {
    height: '500px'
}

export default MapComponent; 
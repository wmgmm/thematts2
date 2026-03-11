import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

export default function MapEvidence(){

const evidence = [

{
lat:25.7617,
lng:-80.1918,
text:"Mall entrance where disturbance began"
},

{
lat:25.7625,
lng:-80.1903,
text:"Location where witness Joshua recorded video"
}

]

return(

<div className="map-section">

<h2>Incident Map</h2>

<MapContainer center={[25.7617,-80.1918]} zoom={15} className="map">

<TileLayer
url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
/>

{evidence.map((e,i)=>(
<Marker key={i} position={[e.lat,e.lng]}>
<Popup>{e.text}</Popup>
</Marker>
))}

</MapContainer>

</div>

)

}

import {CircleMarker, MapContainer, Marker, Popup, TileLayer} from 'react-leaflet'





function PartnerLocation({location}) {
  return (
    <div className="leaflet-partner-container">
    <MapContainer style={{height: '100%', width:'100%'}} center={[location.coordinates[1], location.coordinates[0]]} zoom={15} scrollWheelZoom={false}>
    <TileLayer
  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
/>
<Marker position={[location.coordinates[1], location.coordinates[0]]}>
  <Popup>
    Korail supermarché <br /> Valée des colons.
  </Popup>
</Marker>


    </MapContainer>
</div>
  )
}

export default PartnerLocation
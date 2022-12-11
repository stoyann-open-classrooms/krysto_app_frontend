import {CircleMarker, MapContainer, Marker, Popup, TileLayer} from 'react-leaflet'

function CollectPoints() {
  return (
    <div className="page-content">

    <section>
        <h1>trouver un points de collecte</h1>
    </section>

    <div className="leaflet-container">
        <MapContainer style={{height: '100%', width:'100%'}} center={[-22.275800, 166.458000]} zoom={12} scrollWheelZoom={false}>
        <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    <Marker position={[-22.269087857142853, 166.452789]}>
      <Popup>
        Korail supermarché <br /> Valée des colons.
      </Popup>
    </Marker>
    <Marker position={[-22.27631,166.4572]}>
      <Popup>
        Géant st Marie <br /> tel: 28.55.25
      </Popup>
    </Marker>
    <Marker position={[-22.2714885,166.4429696]}>
      <Popup>
        Optic discount <br /> tel: 30.03.40
      </Popup>
    </Marker>
    <Marker position={[-22.2967466,166.4391694]}>
      <Popup>
        clinique de la BD <br /> tel: 30.03.40
      </Popup>
    </Marker>
    <Marker position={[45.1834675,5.7044561]}>
      <Popup>
        clinique de la BD <br /> tel: 30.03.40
      </Popup>
    </Marker>
    <Marker position={[-22.2421748,166.4786543]}>
      <Popup>
        clinique de la BD <br /> tel: 30.03.40
      </Popup>
    </Marker>
 
        </MapContainer>
    </div>
    </div>
  )
}

export default CollectPoints
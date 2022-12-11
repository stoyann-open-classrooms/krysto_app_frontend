import {CircleMarker, MapContainer, Marker, Popup, TileLayer} from 'react-leaflet'
import { Link } from 'react-router-dom'

function CollectPoints() {
  return (
    <div className="page-content">

    <section className='heading'>
        <h1>points de collecte</h1>
        <p>Trouver un point de collecte prés de chez  vous</p>
    </section>
    <section>
      Vous pouvez ammener en points de collecte la plupart des plastiques (bouchons de bouteille, bouteille de shampoing, lessive , bacs de glace...) cependant certains type de plastique ne sont encore pas recyclable par KRYSTO comme par exemple les bouteilles d'eau ou de soda ce type de plastique est trés facile a reconnaitre il est génèralement transparent  
       <Link  className='btn btn-block' to={'/recyclable-products'}> Liste des articles recyclable par Krysto</Link> 
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
    <section className='contact-section'>
  Vous êtes une entreprise une association ou un syndicat de propriéte et vous souhaiter mettre en place un point de collecte ?
<Link className='btn'  to={'/pro-offers'}>contacter nous</Link>
</section>
    </div>
  )
}

export default CollectPoints
import {
  CircleMarker,
  MapContainer,
  Marker,
  Popup,
  TileLayer,
} from "react-leaflet";
import { Link } from "react-router-dom";

function CollectPoints() {
  return (
    <div className="page-content">
      <section className="heading">
        <h1>points de collecte</h1>
        <p>Trouver un point de collecte prés de chez vous</p>
      </section>
      <section>
        <p>
          Chez KRYSTO, nous sommes déterminés à recycler un maximum de types de
          plastique. Pour l'instant, nous recyclons notamment les bouchons de
          bouteille, les bouteilles de shampoing, les bouteilles de lessive, les
          bacs de glace...
        </p>
        <p>
          Ces types de plastique peuvent être identifiés grâce aux symboles 5 ou
          2. Cependant, il y a actuellement quelques types de plastique que nous
          ne sommes pas encore en mesure de recycler, comme les bouteilles d'eau
          et de soda en plastique PET, qui sont facilement reconnaissables car
          elles sont généralement transparentes. Nous testons constamment à
          l'ajout de nouveaux types de plastique dans notre gamme de produits
          recyclables, comme le polystyrène par exemple qui comporte des
          propriétes trés interessentes,il est semblable a du verres et peut
          être polie, nous espérons pouvoir inclure d'autres types de plastique
          dans le futur tout en vous proposant des produits de qualité.
        </p>
      </section>

      <div className="leaflet-container">
        <MapContainer
          style={{ height: "100%", width: "100%" }}
          center={[-22.2758, 166.458]}
          zoom={12}
          scrollWheelZoom={false}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={[-22.269087857142853, 166.452789]}>
            <Popup>
              Korail supermarché <br /> Valée des colons.
            </Popup>
          </Marker>
          <Marker position={[-22.27631, 166.4572]}>
            <Popup>
              Géant st Marie <br /> tel: 28.55.25
            </Popup>
          </Marker>
          <Marker position={[-22.2714885, 166.4429696]}>
            <Popup>
              Optic discount <br /> tel: 30.03.40
            </Popup>
          </Marker>
          <Marker position={[-22.2967466, 166.4391694]}>
            <Popup>
              clinique de la BD <br /> tel: 30.03.40
            </Popup>
          </Marker>
          <Marker position={[45.1834675, 5.7044561]}>
            <Popup>
              clinique de la BD <br /> tel: 30.03.40
            </Popup>
          </Marker>
          <Marker position={[-22.2421748, 166.4786543]}>
            <Popup>
              clinique de la BD <br /> tel: 30.03.40
            </Popup>
          </Marker>
        </MapContainer>
      </div>

      <section>
        <Link className="btn btn-block" to={"/les-produits-recyclables"}>
          {" "}
          Liste des articles recyclable par Krysto
        </Link>
      </section>
      <section className="contact-section">
        Vous êtes une entreprise une association ou un syndicat de propriéte et
        vous souhaiter mettre en place un point de collecte ?
        <Link className="btn" to={"/offre-proffesionel"}>
          contacter nous
        </Link>
      </section>
    </div>
  );
}

export default CollectPoints;

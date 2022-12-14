import handImage from '../assets/image/bouchons_hands.png'
import product from '../assets/image/extrusion-products.jpg'
import krysto from '../assets/image/shred_plastic_bar.jpeg'
import waste from '../assets/image/Plastic-waste-ocean.jpg'

function About() {
  return (
    <div className='page-content'>
    <section className="heading">
    <h1>Notre mission</h1>
      <img src={handImage} alt="" />
      <h4>Transformer un matériau obsolète pour créer quelque chose de qualitiativement supérieur</h4>
      <p>C'est en collectant divers déchets qui seront ensuiite broyés en fins Krysto avant d'être chauffés et injecter ou extruder dans des moules que nos productions prennent vie.</p>
      <p>Toutes nos productions sont fabriqués à partir d'un seul et unique matériaux afin d'en garantir a 100% leur recyclabilité par la suite.</p>
  </section>
  <div className="boxes">
    <div>
      <img className='img-box' src={waste} alt="" />
      <h4>Déchets</h4>
    </div>
    <div>
      <img className='img-box' src={krysto} alt="" />
      <h4>krysto</h4>
    </div>
    <div>
      <img className='img-box' src={product} alt="" />
      <h4>Produits</h4>
    </div>
  </div>
    </div>
  )
}

export default About
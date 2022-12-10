import chair from '../assets/image/Poutres et planches/applications/bench.jpg'
import localIcone from '../assets/icones/Fichier 12.svg'
import hydroIcone from '../assets/icones/Fichier 14.svg'
import recyclableIcone from '../assets/icones/Fichier 3.svg'
 import transformIcone from '../assets/icones/Fichier 4.svg'
import designIcone from '../assets/icones/Fichier 13.svg'
 import easyIcone from '../assets/icones/Fichier 10.svg'

function Home() {
  return (
    <>
    <section className="heading">
      <h1>Clean, Create, Recycle, Repeat</h1>
    <p>Re-Penser le design grâce au plastique reyclé</p>
    <img src={chair} alt="" />
    </section>
    <section className="heading">
      <h1>Des materiaux au service de l'environement</h1>
    <p>La production mondiale de plastique a triplé en 25 ans et la croissance ne ralentit pas.</p>
    <p>à l'echelle de la France, cela représente plus de 5 millions de tonnes produite chaque années dont seulement 9% seront recyclés.</p>
    <p>Pour la plupart ces déchets finissent enfouit ou dans l'océan. Si le constat est accablant, les conséquence sur notre environement unique au monde le sont tout autant</p>

    </section>
    <div className="boxes">
      <div className='little-boxe'>
        <img src= {localIcone} alt="" />
        <h3>Fabriqué localement</h3>
      </div>
      <div className='little-boxe'>
      <img src= {hydroIcone} alt="" />

        <h3>Imputrescible & Hydrofuge</h3>
      </div>
      <div className='little-boxe'>
      <img src= {recyclableIcone} alt="" />

        <h3>100% recyclé & recyclable</h3>
      </div>
      <div className='little-boxe'>
      <img src= {transformIcone} alt="" />

        <h3>Transformable & durable</h3>
      </div>
      <div className='little-boxe'>
      <img src= {designIcone} alt="" />
        <h3>Colorée & design</h3>
      </div>
      <div className='little-boxe'>

      <img src= {easyIcone} alt="" />
        <h3>ce travaille comme le bois</h3>
      </div>
    </div>
    </>
  );
}

export default Home;

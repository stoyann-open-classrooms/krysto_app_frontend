import chair from '../../assets/image/peignes/288875661_552125706369691_6826584056555296254_n.jpg'
import bench from '../../assets/image/Poutres et planches/applications/TP Concrete Side Angle-howto.jpg'
import beam from '../../assets/image/Poutres et planches/applications/BEAMS COLOR.jpg'
import beamColor from '../../assets/image/dessous_de_verres/sous_verre.jpg'
import tiles from '../../assets/image/dessous_de_verres/product desesous de verre package.jpg'
import dammier from '../../assets/image/Poutres et planches/applications/DAMIER BEAMS.png'
import usb from '../../assets/image/clefs_usb/usb key.jpg'
import stylo from '../../assets/image/Stylos/stylos1.jpg'
import stylo1 from '../../assets/image/Stylos/stylos3.jpg'

// import Swiper core and required modules
// import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade } from 'swiper';

import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './home.css'
// import required modules
import { EffectCube, Navigation, Pagination, Mousewheel, Keyboard } from "swiper";
function HomeSlider() {
   
  return (
    
    <>
    <Swiper  cssMode={true}
        navigation={true}
        pagination={{
            type:"fraction",
        }}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, EffectCube, Pagination, Mousewheel, Keyboard]}
        className="mySwiper">
      <SwiperSlide> <img src={chair} alt="" /></SwiperSlide>
      <SwiperSlide><img src={bench} alt="" /></SwiperSlide>
      <SwiperSlide><img src={beam} alt="" /></SwiperSlide>
      <SwiperSlide><img src={dammier} alt="" /></SwiperSlide>
      <SwiperSlide><img src={beamColor} alt="" /></SwiperSlide>
      <SwiperSlide><img src={tiles} alt="" /></SwiperSlide>
      <SwiperSlide><img src={usb} alt="" /></SwiperSlide>
      <SwiperSlide><img src={stylo} alt="" /></SwiperSlide>
      <SwiperSlide><img src={stylo1} alt="" /></SwiperSlide>
    </Swiper>
  </>
  )
}

export default HomeSlider
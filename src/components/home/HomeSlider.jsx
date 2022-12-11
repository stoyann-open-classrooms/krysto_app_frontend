import chair from '../../assets/image/peignes/288875661_552125706369691_6826584056555296254_n.jpg'
import bench from '../../assets/image/peignes/289018733_552125703036358_5745330102958386290_n.jpg'
import beam from '../../assets/image/peignes/289239288_552125699703025_4772789164660223658_n.jpg'
import beamColor from '../../assets/image/peignes/293845882_563366031912325_7273739936379765418_n.jpg'
import dammier from '../../assets/image/Poutres et planches/applications/DAMIER BEAMS.png'

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
      <SwiperSlide><img src={chair} alt="" /></SwiperSlide>
      <SwiperSlide><img src={chair} alt="" /></SwiperSlide>
      <SwiperSlide><img src={chair} alt="" /></SwiperSlide>
      <SwiperSlide><img src={chair} alt="" /></SwiperSlide>
    </Swiper>
  </>
  )
}

export default HomeSlider
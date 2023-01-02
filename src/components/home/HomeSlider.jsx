import tiles1 from '../../assets/image/dessous_de_verres/tiles_0.jpg'
import tiles2 from '../../assets/image/dessous_de_verres/tiles_1.jpg'
import tiles3 from '../../assets/image/dessous_de_verres/tiles_2.jpg'
import tiles4 from '../../assets/image/dessous_de_verres/tiles_3.jpg'
import tiles5 from '../../assets/image/dessous_de_verres/tiles_5.jpg'
import tiles6 from '../../assets/image/dessous_de_verres/tiles_6.jpg'
import beams0 from '../../assets/image/Poutres et planches/applications/beam_0.jpg'
import beams1 from '../../assets/image/Poutres et planches/applications/beam_1.jpg'
import beams2 from '../../assets/image/Poutres et planches/applications/beam_2.jpg'
import beams3 from '../../assets/image/Poutres et planches/applications/beam_3.jpg'
import beams4 from '../../assets/image/Poutres et planches/applications/beam_4.jpg'
import beams5 from '../../assets/image/Poutres et planches/applications/beam_5.jpg'
import beams6 from '../../assets/image/Poutres et planches/applications/beam_6.jpg'
import beams7 from '../../assets/image/Poutres et planches/applications/beam_7.jpg'
import beams8 from '../../assets/image/Poutres et planches/applications/beam_8.png'
import beams9 from '../../assets/image/Poutres et planches/applications/beam_9.png'
import beams10 from '../../assets/image/Poutres et planches/applications/beam_10.jpg'
import beams11 from '../../assets/image/Poutres et planches/applications/beam_11.jpg'
import beams12 from '../../assets/image/Poutres et planches/applications/beam_12.jpg'
import beams13 from '../../assets/image/Poutres et planches/applications/beam_13.jpg'
import beams14 from '../../assets/image/Poutres et planches/applications/beam_14.jpg'
import beams15 from '../../assets/image/Poutres et planches/applications/beam_15.JPG'
import lunette from '../../assets/image/lunettes/Luengoni/grey/LUENGONI_GREYTRANS_GRAY.jpg'
import lunette1 from '../../assets/image/lunettes/Nenon/NENON_front15.jpg'
import lunette2 from '../../assets/image/lunettes/Tangy/TANGUY_front_Blue_Grey.png'
import usb from '../../assets/image/clefs_usb/usb_2.jpg'
import usb1 from '../../assets/image/clefs_usb/usb_3.jpg'
import stylo from '../../assets/image/Stylos/pen_1.jpg'
import stylo1 from '../../assets/image/Stylos/pen_5.jpg'
import stylo2 from '../../assets/image/Stylos/pen_2.jpg'
import stylo3 from '../../assets/image/Stylos/pen_3.jpg'
import stylo4 from '../../assets/image/Stylos/pen_4.jpg'
import peigne1 from '../../assets/image/peignes/peigne_1.jpg'
import peigne2 from '../../assets/image/peignes/peigne_2.jpg'
import peigne3  from '../../assets/image/peignes/peigne_3.jpg'
import peigne4 from '../../assets/image/peignes/peigne_4.jpg'



// import Swiper core and required modules
// import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade } from 'swiper';

import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import '../../pages/home/home.css'
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
      <SwiperSlide> <img src={tiles1} alt="" /></SwiperSlide>
      <SwiperSlide> <img src={tiles2} alt="" /></SwiperSlide>
      <SwiperSlide> <img src={tiles3} alt="" /></SwiperSlide>
      <SwiperSlide> <img src={tiles4} alt="" /></SwiperSlide>
      <SwiperSlide> <img src={tiles5} alt="" /></SwiperSlide>
      <SwiperSlide> <img src={tiles6} alt="" /></SwiperSlide>
      <SwiperSlide> <img src={beams0} alt="" /></SwiperSlide>
      <SwiperSlide> <img src={beams1} alt="" /></SwiperSlide>
      <SwiperSlide> <img src={beams2} alt="" /></SwiperSlide>
      <SwiperSlide> <img src={beams3} alt="" /></SwiperSlide>
      <SwiperSlide> <img src={beams4} alt="" /></SwiperSlide>
      <SwiperSlide> <img src={beams5} alt="" /></SwiperSlide>
      <SwiperSlide> <img src={beams6} alt="" /></SwiperSlide>
      <SwiperSlide> <img src={beams7} alt="" /></SwiperSlide>
      <SwiperSlide> <img src={beams8} alt="" /></SwiperSlide>
      <SwiperSlide> <img src={beams9} alt="" /></SwiperSlide>
      <SwiperSlide> <img src={beams10} alt="" /></SwiperSlide>
      <SwiperSlide> <img src={beams11} alt="" /></SwiperSlide>
      <SwiperSlide> <img src={beams12} alt="" /></SwiperSlide>
      <SwiperSlide> <img src={beams13} alt="" /></SwiperSlide>
      <SwiperSlide> <img src={beams14} alt="" /></SwiperSlide>
      <SwiperSlide> <img src={beams15} alt="" /></SwiperSlide>
      <SwiperSlide> <img src={lunette} alt="" /></SwiperSlide>
      <SwiperSlide> <img src={lunette1} alt="" /></SwiperSlide>
      <SwiperSlide> <img src={lunette2} alt="" /></SwiperSlide>
      <SwiperSlide> <img src={usb} alt="" /></SwiperSlide>
      <SwiperSlide> <img src={usb1} alt="" /></SwiperSlide>
      <SwiperSlide> <img src={stylo} alt="" /></SwiperSlide>
      <SwiperSlide> <img src={stylo1} alt="" /></SwiperSlide>
      <SwiperSlide> <img src={stylo2} alt="" /></SwiperSlide>
      <SwiperSlide> <img src={stylo3} alt="" /></SwiperSlide>
      <SwiperSlide> <img src={stylo4} alt="" /></SwiperSlide>
      <SwiperSlide> <img src={peigne1} alt="" /></SwiperSlide>
      <SwiperSlide> <img src={peigne2} alt="" /></SwiperSlide>
      <SwiperSlide> <img src={peigne3} alt="" /></SwiperSlide>
      <SwiperSlide> <img src={peigne4} alt="" /></SwiperSlide>
    
      
    </Swiper>
  </>
  )
}

export default HomeSlider
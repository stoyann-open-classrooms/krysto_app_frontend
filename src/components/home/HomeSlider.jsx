import tiles1 from '../../assets/image/dessous_de_verres/tiles_0.jpg'
import tiles2 from '../../assets/image/dessous_de_verres/tiles_1.jpg'


import beams0 from '../../assets/image/Poutres et planches/applications/beam_0.jpg'
import beams1 from '../../assets/image/Poutres et planches/applications/beam_1.jpg'
import beams2 from '../../assets/image/Poutres et planches/applications/beam_2.jpg'
import lunette from '../../assets/image/lunettes/Luengoni/grey/LUENGONI_GREYTRANS_GRAY.jpg'
import lunette1 from '../../assets/image/lunettes/Nenon/NENON_front15.jpg'
import lunette2 from '../../assets/image/lunettes/Tangy/TANGUY_front_Blue_Grey.png'
import usb from '../../assets/image/clefs_usb/usb_2.jpg'
import usb1 from '../../assets/image/clefs_usb/usb_3.jpg'
import stylo from '../../assets/image/Stylos/pen_1.jpg'
import stylo1 from '../../assets/image/Stylos/pen_5.jpg'
import stylo2 from '../../assets/image/Stylos/pen_2.jpg'




// import Swiper core and required modules
// import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade } from 'swiper';

import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import '../../pages/public/home/home.css'
// import required modules
import { EffectCube, Navigation, Pagination, Mousewheel, Keyboard } from "swiper";
function HomeSlider() {
   
  return (
    
    <div className='home-slider-container'>
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
      
      <SwiperSlide> <img src={beams0} alt="" /></SwiperSlide>
      <SwiperSlide> <img src={beams1} alt="" /></SwiperSlide>
      <SwiperSlide> <img src={beams2} alt="" /></SwiperSlide>
     
      <SwiperSlide> <img src={lunette} alt="" /></SwiperSlide>
      <SwiperSlide> <img src={lunette1} alt="" /></SwiperSlide>
      <SwiperSlide> <img src={lunette2} alt="" /></SwiperSlide>
      <SwiperSlide> <img src={usb} alt="" /></SwiperSlide>
      <SwiperSlide> <img src={usb1} alt="" /></SwiperSlide>
      <SwiperSlide> <img src={stylo} alt="" /></SwiperSlide>
      <SwiperSlide> <img src={stylo1} alt="" /></SwiperSlide>
      <SwiperSlide> <img src={stylo2} alt="" /></SwiperSlide>
     

    
      
    </Swiper>
  </div>
  )
}

export default HomeSlider
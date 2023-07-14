import SlideImg from '../assets/slide1.png'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation,EffectFade,Autoplay } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';
const Inicio = () => {

  return (
    <>
      <div className="main">
        <section className='Hero'>
            <div className="container">
                <div className="row">
                    <div className="col-md-5 pt-3">
                      <h3>Dosificación, bombeo de fluidos, y plásticos de ingeniería.</h3>
                      <div className="box">
                      <h1 className='titleHome'>LIDERES EN GESTIÓN A SUS NECESIDADES</h1>
                      </div>
                    </div>
                    <div className="col-md-7">
                      <div className="boxSlider">
                      <Swiper
                        navigation={true} 
                        modules={[Navigation,EffectFade,Autoplay]} 
                        autoplay={{
                          delay: 6500,
                          disableOnInteraction: false,
                        }}
                        className="mySwiperHero"
                        effect={'fade'}
                      >
                          <SwiperSlide> <img src={SlideImg} className='img-fluid' alt="" /> </SwiperSlide>
                          <SwiperSlide> <img src={SlideImg} className='img-fluid' alt="" /> </SwiperSlide>
                          <SwiperSlide> <img src={SlideImg} className='img-fluid' alt="" /> </SwiperSlide>
                      </Swiper> 
                      </div>
                     
                    </div>
                </div>
                <div className="row pt-5">
                <div className="col-md-6">
                      <div className="boxDes">
                        <p>Nos dedicamos a comercializar soluciones integrales  para nuestros clientes en los campos petrolero, petroquímico, química industrial, textil, cementeras, agroindustrial y a  la fabricación de láminas plásticas para órtesis y prótesis.</p>
                      </div>
                       
                    </div>
                    <div className="col-md-6">
                      <h4 className='text-center mb-4'><b>REPRESENTANTES DIRECTOS</b></h4>
                      <div className="boxMarksOne">
                      <Swiper
                        modules={[Autoplay]} 
                        slidesPerView={4}
                        breakpoints={{
                          640: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                          },
                          768: {
                            slidesPerView: 2,
                            spaceBetween: 40,
                          },
                          1024: {
                            slidesPerView: 4,
                            spaceBetween: 50,
                          },
                        }}
                        autoplay={{
                          delay: 6500,
                          disableOnInteraction: false,
                        }}
                        className="SwiperMark" 
                      >
                          <SwiperSlide> <img src="logo1.png" className='img-fluid' alt="" /> </SwiperSlide> 
                          <SwiperSlide> <img src="logo2.png" className='img-fluid' alt="" /> </SwiperSlide> 
                          <SwiperSlide> <img src="logo3.png" className='img-fluid' alt="" /> </SwiperSlide> 
                          <SwiperSlide> <img src="logo4.png" className='img-fluid' alt="" /> </SwiperSlide> 
                      </Swiper> 
                      </div>
                      <h5 className='text-center mt-4 mb-4'><b>DISTRIBUIDORES DE:</b></h5>
                      <div className="boxMarksOne">
                      <Swiper
                        modules={[Autoplay]} 
                        slidesPerView={4}
                        breakpoints={{
                          640: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                          },
                          768: {
                            slidesPerView: 2,
                            spaceBetween: 40,
                          },
                          1024: {
                            slidesPerView: 4,
                            spaceBetween: 50,
                          },
                        }}
                        autoplay={{
                          delay: 2500,
                          disableOnInteraction: false,
                        }}
                        className="SwiperMark" 
                      >
                         <SwiperSlide> <img src="logo5.png" className='img-fluid' alt="" /> </SwiperSlide> 
                          <SwiperSlide> <img src="logo6.png" className='img-fluid' alt="" /> </SwiperSlide> 
                          <SwiperSlide> <img src="logo7.png" className='img-fluid' alt="" /> </SwiperSlide> 
                          <SwiperSlide> <img src="logo8.png" className='img-fluid' alt="" /> </SwiperSlide>
                          <SwiperSlide> <img src="logo9.png" className='img-fluid' alt="" /> </SwiperSlide>
                      </Swiper> 
                      </div>
                    </div>
                </div>
            </div>
        </section>
      </div>
    </>
  
  )
}

export default Inicio

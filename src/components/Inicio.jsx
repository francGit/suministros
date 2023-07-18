import SlideImg from '../assets/slide1.png'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation,EffectFade,Autoplay } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';
import { SplitText } from '@cyriacbr/react-split-text';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
const Inicio = () => {

  return (
    <>
      <motion.div className="main"
        initial={{opacity:0}}
        animate={{opacity:1}}
        exit={{opacity:0, transition:{duration:1}}}
      >
        <section className='Hero'>
            <div className="container">
                <div className="row">
                    <div className="col-md-5 pt-3">
                      <h3>Dosificación, bombeo de fluidos, y plásticos de ingeniería.</h3>
                      <div className="box">
                      <h1 className='titleHome'>
                        <SplitText  >
                        LIDERES EN GESTIÓN A SUS NECESIDADES
                        </SplitText>
                        
                      </h1>
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
                <div className="row pt-5 pb-5">
                <div className="col-md-6">
                      <div className="boxDes">
                        <p>Nos dedicamos a comercializar soluciones integrales  para nuestros clientes en los campos petrolero, petroquímico, química industrial, textil, cementeras, agroindustrial y a  la fabricación de láminas plásticas para órtesis y prótesis.</p>
                      </div>
                       
                    </div>
                    <div className="col-md-6">
                      <h4 className='text-center mb-2'><b>REPRESENTANTES DIRECTOS</b></h4>
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
                      <h5 className='text-center mt-2 mb-2'><b>DISTRIBUIDORES DE:</b></h5>
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
        <section className='bannerHome'>
          <div className="container">
            <div className="row">
              <div className="col-md-8">
                        <div className="bannerPromotion">
                           <div className="info">
                            <h2 className='title font-noir-heavy'>Visitanos Stand 8046: DOSIVAC - SIS S.A.S.</h2>
                            <h5>Acompañenos en el Centro NRG PARK HUSTON, TEXAS, USA.</h5>
                            <h3>Lunes 6 de mayo de 2024 a jueves 9 de mayo de 2023.</h3>
                            <h2>CELEBRATING 54 YEARS 1969 - 2023</h2>
                           </div>
                        <div className="overlay"></div>
                        </div>
                        <div className="bannerContact">
                          <div className="info">
                              <h2 className='title'>CONTÁCTENOS</h2>
                              <p>Si desea más información respecto a nuestro productos o requiere ayuda, puede hacerlo desde el siguiente botón.</p>
                          </div>
                          <div className="cta">
                          <NavLink>Ver más</NavLink>
                      </div>
                        </div>
              </div>
              <div className="col-md-4">
               <div className="bannerRenta">
                      <div className="info">
                          <h2 className='title font-noir-heavy'>RENTA DE EQUIPOS</h2>
                          <h4>Con opción de <b>Compra</b></h4>

                      </div>
                          <img src="./EQUIPOS.png" className='img-fluid' alt="" />
                      <div className="cta">
                          <NavLink>Ver más</NavLink>
                      </div>
                      <div className="overlay"></div>
               </div>
              </div>
            </div>
          </div>
        </section>
      </motion.div>
    </>
  
  )
}

export default Inicio

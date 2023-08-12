// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation,EffectFade,Autoplay } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade'; 
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import useFethData from '../hooks/useFetchData'
import {iniUrl} from '../../config'
import { Preloader } from './utils/Preloader';
import ProgressiveImage from "react-progressive-graceful-image"; 
import img from '../assets/dummy.png'
const Inicio = () => {
  const {loading, result, error} = useFethData(`${iniUrl}`)
  if(loading) return <Preloader/>

  return (
    <>
      <div className="main"> 
        <section className='Hero'>
            <div className="container">
                <div className="row">
                    <div className="col-md-5 pt-3"> 
                      <motion.h3
                        initial={{ opacity: 0, y:"40%" }}
                        transition={{delay:0.4, duration:0.9} } 
                        whileInView={{ opacity: 1, y:0 }}
                        viewport={{ once: true }}
                      >{result.subtitulo}</motion.h3>
                      <div className="box">
                      <motion.h1 className='titleHome'
                        initial={{ opacity: 0, y:"30%" }}
                        transition={{delay:0.3, duration:0.9} } 
                        whileInView={{ opacity: 1, y:0 }}
                        viewport={{ once: true }}
                      > 
                      {result.titular} 
                      </motion.h1>
                      </div>
                    </div>
                    <div className="col-md-7">
                      <motion.div className="boxSlider"
                        initial={{ opacity: 0, y:"30%" }}
                        transition={{delay:0.3, duration:0.9} } 
                        whileInView={{ opacity: 1, y:0 }}
                        viewport={{ once: true }}
                      >
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
                        {
                          result.galeria && Object.values(result.galeria).map((item, index) => (
                            <SwiperSlide key={index}>
                              <ProgressiveImage  
                                src={item.media_gallery}
                                placeholder={img}
                              >
                                {(src, loading) => (
                                  <img
                                    style={{ opacity: loading ? 0.5 : 1 }}
                                    src={src}
                                    alt=""
                                    className="img-fluid"
                                  />
                                )}
                              </ProgressiveImage>  
                              </SwiperSlide>
                          ))
                        }
                        
                         
                          
                      </Swiper> 
                      
                      </motion.div>
                     
                    </div>
                </div>
                <div className="row pt-5 pb-5">
                <motion.div className="col-md-6"
                initial={{ opacity: 0  }}
                transition={{delay:0.6, duration:0.9} } 
                whileInView={{ opacity: 1  }}
                viewport={{ once: true }}
                >
                      <div className="boxDes">  
                        <p>{result.descripcion}</p>
                      </div>
                       
                    </motion.div>
                    <motion.div className="col-md-6"
                    initial={{ opacity: 0 }}
                    transition={{delay:0.5, duration:0.9} } 
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}>
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
                         {
                          result.representantes && Object.values(result.representantes).map((item, index) => (
                            <SwiperSlide key={index}> 
                            <ProgressiveImage  
                                src={item.marca}
                                placeholder={img}
                              >
                                {(src, loading) => (
                                  <img
                                    style={{ opacity: loading ? 0.5 : 1 }}
                                    src={src}
                                    alt="an alternative text"
                                    className="img-fluid"
                                  />
                                )}
                              </ProgressiveImage>  
                            </SwiperSlide>
                          ))
                        }
                          
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
                        {
                          result.distribuidores && Object.values(result.distribuidores).map((item, index) => (
                            <SwiperSlide key={index}> 
                            <ProgressiveImage  
                                src={item.marca}
                                placeholder={img}
                              >
                                {(src, loading) => (
                                  <img
                                    style={{ opacity: loading ? 0.5 : 1 }}
                                    src={src}
                                    alt="an alternative text"
                                    className="img-fluid"
                                  />
                                )}
                              </ProgressiveImage> 
                            
                            </SwiperSlide>
                          ))
                        } 
                      </Swiper> 
                      </div>
                    </motion.div>
                </div>
            </div>
        </section>
        <section className='bannerHome'>
          <div className="container">
            <div className="row">
              <motion.div className="col-md-8" 
                initial={{ opacity: 0 }}
                transition={{delay:0.5, duration:0.9} } 
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
              >
                        <div className="bannerPromotion">
                           <div className="info">
                            <h2 className='title font-noir-heavy'>{result.titulo_bnn}</h2>
                            <h5>{result.subtitulo_848}</h5>
                            <div dangerouslySetInnerHTML={{ __html: result.decripcion_bnn }} /> 
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
              </motion.div>
              <motion.div className="col-md-4"
                initial={{ opacity: 0  }}
                transition={{delay:0.6, duration:0.9} } 
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
              >
               <div className="bannerRenta">
                      <div className="info">
                          <h2 className='title font-noir-heavy'>RENTA DE EQUIPOS</h2>
                          <h4>Con opción de <b>Compra</b></h4>

                      </div>
                      <ProgressiveImage  
                              src="./EQUIPOS.png"
                              placeholder={img}
                            >
                              {(src, loading) => (
                                <img
                                  style={{ opacity: loading ? 0.5 : 1 }}
                                  src={src}
                                  alt=""
                                  className="img-fluid imgExtra"
                                />
                              )}
                 </ProgressiveImage> 
                           
                      <div className="cta">
                          <NavLink>Ver más</NavLink>
                      </div>
                      <div className="overlay"></div>
               </div>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </>
  
  )
}

export default Inicio

import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion' 
import { NavLink } from "react-router-dom"
import { FaAngleLeft } from "react-icons/fa"
import Icondwn from '../assets/Iconly-Download-red.svg'   
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
export const Producto = () => {

  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  return (
    <motion.div className='main pHead'
      initial={{opacity:0}}
      animate={{opacity:1}}
      exit={{opacity:0, transition:{duration:1}}}
    >
       <section className="pt-3">
        <div className="container">
          <div className="row">
            <div className="col-md-5">
              <div className="infoImg">  
                  <Swiper
                    spaceBetween={10}
                    navigation={true}
                    thumbs={{ swiper: thumbsSwiper }}
                    modules={[FreeMode, Navigation, Thumbs]}
                    className="mySwiperHero"
                  >
                      <SwiperSlide>
                      <img src="../D15.png" className="img-fluid" alt="" />
                      </SwiperSlide>
                      <SwiperSlide>
                      <img src="../D15.png" className="img-fluid" alt="" />
                      </SwiperSlide>
                      <SwiperSlide>
                      <img src="../D15.png" className="img-fluid" alt="" />
                      </SwiperSlide>
                  </Swiper>
                  <Swiper >
                      <SwiperSlide>
                      <img src="../D15.png" className="img-fluid" alt="" />
                      </SwiperSlide>
                      <SwiperSlide>
                      <img src="../D15.png" className="img-fluid" alt="" />
                      </SwiperSlide>
                      <SwiperSlide>
                      <img src="../D15.png" className="img-fluid" alt="" />
                      </SwiperSlide>
                  </Swiper>

                
              </div>
            </div>
            <div className="col-md-7">
              <div className="infoSub">
                <div className="header">
                  <div className="breadcrumbs">
                    <small>PRODUCTOS/INDESUR/</small>
                  </div> 
                  <div className="actions">
                    <div className="cta"> 
                        <NavLink to="/productos"><i><FaAngleLeft/></i> VOLVER</NavLink>
                    </div>
                    </div>         
                </div>
                <hr className="hr" />
                <div className="body">
                  <h2>D15</h2> 
                  <h4>½ pulgada - 33 litros/min</h4>
                  <p>Es ideal para el suministro de solventes y tintas desde tambores o contenedores de tamaño reducido.</p>
                  <div className="actions mt-5">
                      <div className="cta"> 
                            <NavLink to="/productos"><i><FaAngleLeft/></i> Contáctenos</NavLink>
                        </div>
                      <div className="listFiles">
                        <div className="file">
                            <NavLink><span>FOLLETO</span> <i><img src={Icondwn} alt="" /></i></NavLink>
                        </div> 
                      
                      </div> 
                  </div>
                  <h4 className='pt-4'>País de origen y marca:</h4>
                    <div className="boxOrigen">
                    <span className="flag">
                        <img src="../arg.png" alt="" />
                    </span>
                    <div className="brand">
                      <img src="../indesur.png" className="img-fluid" alt="" />
                    </div>
                    </div>
                  <h2 className="mt-5">REFERENCIAS</h2>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  )
}

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion' 
import { NavLink, useParams,useLocation } from "react-router-dom"
import { FaAngleLeft } from "react-icons/fa"
import Icondwn from '../assets/Iconly-Download-red.svg'   
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import ProgressiveImage from "react-progressive-graceful-image"; 
import useFethSubCat from '../hooks/useFetchSub'
import useFetchProds from '../hooks/useFetchProds'
import {catUrlWp} from '../../config'  
import {prodUrlWp} from '../../config' 
import { Preloader } from './utils/Preloader'; 

export const Producto = () => {
  const { id } = useParams(); 
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const { loadingCat, dataCat, errorCat } = useFethSubCat(`${catUrlWp}/?per_page=20`)
  const { loadingProd, dataProd, errorProd } = useFetchProds(`${prodUrlWp}/${id}`);
  const [subcategoria, setSubcategoria] = useState(null);
  const {search} = useLocation(); 
  const subcategoriaValue = search.split("?")[1];


  if (loadingCat || loadingProd) return <Preloader />; 
  return (
    <motion.div className='main pHead'
      initial={{opacity:0}}
      animate={{opacity:1}}
      exit={{opacity:0, transition:{duration:1}}}
    >
       <section className="pt-3">
        <div className="container">
          <div className="row">
            <motion.div className="col-md-5" 
               initial={{ opacity: 0, x:"10%" }}
               transition={{delay:0.3, duration:0.9} } 
               whileInView={{ opacity: 1, x:0 }}
               viewport={{ once: true }}
            >
              <div className="infoImg"
                
              >  
                  <Swiper 
                      style={{
                        '--swiper-navigation-color': '#fff',
                        '--swiper-pagination-color': '#fff',
                      }}
                      spaceBetween={10}
                      navigation={true}  
                      className="mySwiperThmbBox2"
                      thumbs={{swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null}}
                      modules={[FreeMode, Navigation, Thumbs]} 
                  >

                      {
                        dataProd.meta.galeria && Object.values(dataProd.meta.galeria).map((img, i)=>(
                          <SwiperSlide key={i}>
                            <ProgressiveImage  
                              src={img.images}
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
                  <Swiper
                    onSwiper={setThumbsSwiper}
                    spaceBetween={10}
                    slidesPerView={3}
                    freeMode={true}
                    watchSlidesProgress={true}
                    modules={[FreeMode, Navigation, Thumbs]}  
                     className="mySwiperThmbBox"
                  >
                      {
                        dataProd.meta.galeria && Object.values(dataProd.meta.galeria).map((img, i)=>(
                          <SwiperSlide key={i}>
                             <ProgressiveImage  
                              src={img.images}
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

                
              </div>
            </motion.div>
            <div className="col-md-7">
              <div className="infoSub">
                <motion.div className="header"
                   initial={{ opacity: 0, y:"30%" }}
                   transition={{delay:0.3, duration:0.9} } 
                   whileInView={{ opacity: 1, y:0 }}
                   viewport={{ once: true }}
                >
                  <div className="breadcrumbs">
                    {/* <small>PRODUCTOS/INDESUR/</small> */}
                  </div> 
                  <div className="actions">
                  <div className="cta">
                     
                      <NavLink to={`/subcategoria/${subcategoriaValue}`}>
                        <i>
                          <FaAngleLeft />
                        </i> 
                        VOLVER
                      </NavLink>
                  
                  </div>
                    </div>         
                </motion.div>
                <hr className="hr" />
                <motion.div className="body"
                   initial={{ opacity: 0, y:"30%" }}
                   transition={{delay:0.3, duration:0.9} } 
                   whileInView={{ opacity: 1, y:0 }}
                   viewport={{ once: true }}
                >
                  <h2>{dataProd.title.rendered}</h2> 
                  <h4>{dataProd.meta.caracteristicas}</h4>
                  <p>{dataProd.meta.descripcion}</p>
                  <div className="actions mt-5">
                      <div className="cta"> 
                            <NavLink to="/contacto">Contáctenos</NavLink>
                        </div>
                      <div className="listFiles prodFiles">
                      {
                        dataProd.meta.links && Object.values(dataProd.meta.links).map((link, index)=>(
                          <div className="file" key={index}>
                            <NavLink to={link.url_link} target='_blank'><span>{link.nombre_link}</span> <i><img src={Icondwn} alt="" /></i></NavLink>
                        </div> 
                        ))
                      }
                        
                      
                      </div> 
                  </div>
                    <motion.h4 className='pt-4 pb-4'
                       initial={{ opacity: 0, y:"30%" }}
                       transition={{delay:0.3, duration:0.9} } 
                       whileInView={{ opacity: 1, y:0 }}
                       viewport={{ once: true }}
                    >País de origen y marca:</motion.h4>
                    <motion.div className="boxOrigen"
                    
                    initial={{ opacity: 0, y:"30%" }}
                    transition={{delay:0.3, duration:0.9} } 
                    whileInView={{ opacity: 1, y:0 }}
                    viewport={{ once: true }}
                    >
                    <span className="flag">
                      {
                        dataProd.meta.bandera != "" ? <img src={dataProd.meta.bandera} className="img-fluid" alt="" /> : ""
                      } 
                    </span>
                    <div className="brand">
                      {
                        dataProd.meta.logo_marca != "" ? <img src={dataProd.meta.logo_marca} className="img-fluid" alt="" /> : ""
                      }
                       
                    </div>
                    </motion.div>
                  <h2 className="mt-5">ESPECIFICACIONES</h2>
                  <motion.div className="especs" 
                   initial={{ opacity: 0, y:"30%" }}
                   transition={{delay:0.3, duration:0.9} } 
                   whileInView={{ opacity: 1, y:0 }}
                   viewport={{ once: true }}
                    >
                    <ul>
                      {
                        dataProd.meta.especificaciones && Object.values(dataProd.meta.especificaciones).map((spec, i)=>(
                          <li key={i}>
                            <h3>{spec.titulo}</h3>
                            <p>{spec.descripcion}</p>
                        </li>
                        ))
                      }
                      
                    
                    </ul>
                  </motion.div>
                </motion.div>

              </div>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  )
}

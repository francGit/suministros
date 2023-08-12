import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion'
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import img from '../assets/dummy.png';
import ProgressiveImage from "react-progressive-graceful-image";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Thumbs } from 'swiper/modules';
import useFethData from '../hooks/useFetchData'
import {aboutUrl} from '../../config'
import { Preloader } from './utils/Preloader';

export const Nosotros = () => {
  
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const {loading, result, error} = useFethData(`${aboutUrl}`)
  if(loading) return <Preloader/>
  return (
    <motion.div className='main'
    
         initial={{opacity:0}}
        animate={{opacity:1}}
        exit={{opacity:0, transition:{duration:1}}}
    >
      <div className="section pHead heroNosotros"> 
        <div className="container">
          <div className="row">
            <div className="col-md-12">
            <h1>Nosotros</h1>
            </div>
          </div>
          <motion.div className="row boxWt mt-4"
          initial={{ opacity: 0, y:"10%" }}
          transition={{delay:0.6, duration:1} } 
          whileInView={{ opacity: 1, y:0 }}
          viewport={{ once: true }}
          >
            <div className="col-md-3">
            <h2>MISIÓN</h2>
            </div>
            <div className="col-md-9">
            <p>{result.descripcion_mision}</p>
            </div>
          </motion.div>
          <motion.div className="row mt-4"
          initial={{ opacity: 0, y:"10%" }}
          transition={{delay:0.6, duration:1} } 
          whileInView={{ opacity: 1, y:0 }}
          viewport={{ once: true }}
          >
            <div className="col-md-9">
            <div className="row boxBk">
                <div className="col-md-4">
                  <h2>VISIÓN</h2>
                </div>
                <div className="col-md-8">
                  <p>{result.descripcion_vision}</p>
                </div>
            </div>
            </div>
            <div className="col-md-3">
              <div className="boximg">
                <ProgressiveImage  
                              src={result.image_general}
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
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      <section className='history pt-5 pb-5'>
        <div className="container">
          <div className="row">
            <motion.div className="col-md-4 pb-4"
              initial={{ opacity: 0, y:"10%" }}
              transition={{delay:0.6, duration:1} } 
              whileInView={{ opacity: 1, y:0 }}
              viewport={{ once: true }}
            >
              <h2 className='title'>{result.titular}</h2>
            </motion.div>
            <motion.div className="col-md-8"
              initial={{ opacity: 0, y:"10%" }}
              transition={{delay:0.6, duration:1} } 
              whileInView={{ opacity: 1, y:0 }}
              viewport={{ once: true }}
            >
              <h2 className='subTitle'>{result.subtitulo}</h2>
              <h3 className='subDesc'>{result.descripcion}</h3>
            </motion.div>
          </div>
          <div className="row">
            <div className="col-md-4">
            <ProgressiveImage  
                              src={result.img_historia}
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
              
            </div>
            <div className="col-md-8">
              <div className="Boxtimeline">
                <div className="boxCont">
                   <div className="infoTime">


                <Swiper 
                      style={{
                        '--swiper-navigation-color': '#fff',
                        '--swiper-pagination-color': '#fff',
                      }}
                      spaceBetween={10}
                     
                      className="mySwiperThmbBox2Time"
                      thumbs={{swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null}}
                      modules={[Navigation, Thumbs]} 
                      direction={'vertical'} 
                  >

            {  result.anios && Object.values(result.anios).map((item, index) => (
                  <SwiperSlide key={index}>
                      <div className="pane">
                          <h3>{item.anio}</h3>
                          <hr />
                          <div dangerouslySetInnerHTML={{ __html: item.contenido }}/>
                          </div> 
                  </SwiperSlide>
                          ))
            } 
 
                  </Swiper>

                   </div>
                </div>
               

                  <div className="boxYear"> 
                  <Swiper
                    onSwiper={setThumbsSwiper}
                    spaceBetween={6}
                    slidesPerView={3}
                    direction={'vertical'} 
                    watchSlidesProgress={true}
                    modules={[Navigation, Thumbs]}  
                    className="mySwiperThmbBoxTime"
                  >


{  result.anios && Object.values(result.anios).map((item, index) => (
              <SwiperSlide key={index}>
              <div className="numberDate">
                <h4>{item.anio}</h4>
              </div>
              </SwiperSlide>
                          ))
            } 
                  </Swiper>
                  </div> 

              </div>
            </div>
          </div>
        </div>
      </section>
      <motion.section className='politicas pt-5 pb-5'
      initial={{ opacity: 0, y:"10%" }}
      transition={{delay:0.6, duration:1} } 
      whileInView={{ opacity: 1, y:0 }}
      viewport={{ once: true }}
      >
        <div className="container">
          <div className="row">
            <motion.div className="col-md-4"
              initial={{ opacity: 0, y:"10%" }}
              transition={{delay:0.6, duration:1} } 
              whileInView={{ opacity: 1, y:0 }}
              viewport={{ once: true }}
            >
              <h2 className='subTitle'>Políticas de calidad</h2>
            </motion.div>
            <div className="col-md-8">
              <p>{result.info_politicas}</p>
            </div>
          </div>
          <div className="row pt-5">
            <div className="col-md-4 mb-5">
              <h4 className='title'>Objetivos:</h4>
            </div>
            { 
            result.objetivo_info && Object.values(result.objetivo_info).map((item, index) => (
              <div className="col-md-4 mb-5" key={index}>
                <div className="itemNum">
                  <span>
                    {index + 1}
                  </span>
                  <p>
                 {item.info}
                  </p>
                </div>
              </div>
               ))
            }
              
             
          </div>
        </div>
      </motion.section>

    </motion.div>
  )
}

import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion'
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Thumbs } from 'swiper/modules';

export const Nosotros = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
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
          <div className="row boxWt mt-4">
            <div className="col-md-3">
            <h2>MISIÓN</h2>
            </div>
            <div className="col-md-9">
            <p>En SIS nos dedicamos a comercializar soluciones integrales  para nuestros clientes en los campos petrolero, petroquímico, química industrial, textil, cementeras, agroindustrial y a  la fabricación de láminas plásticas para órtesis y prótesis, entre otras aplicaciones; brindando resultados eficaces y oportunos en sus requerimientos asociados con la dosificación, bombeo de fluidos, y plásticos de ingeniería, prestamos un servicio postventa con calidad y con personal calificado para satisfacer las necesidades de nuestros clientes,  generando beneficios para los socios,  colaboradores y clientes.</p>
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-md-9">
            <div className="row boxBk">
                <div className="col-md-4">
                  <h2>VISIÓN</h2>
                </div>
                <div className="col-md-8">
                  <p>En SIS queremos posicionarnos en el mercado como una empresa diligente y responsable en la comercialización de soluciones integrales de nuestros clientes, asociadas con la dosificación, bombeo de fluidos, y plásticos de ingeniería, ofreciendo insumos y capacitación técnica a nuestros  clientes en el montaje, operación y mantenimiento de nuestros equipos; para lograr la satisfacción y beneficios para los socios, colaboradores y clientes.</p>
                </div>
            </div>
            </div>
            <div className="col-md-3">
              <div className="boximg">
                <img src="../nosotrosImg.jpg" className='img-fluid' alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className='history pt-5 pb-5'>
        <div className="container">
          <div className="row">
            <div className="col-md-4 pb-4">
              <h2 className='title'>Historia de la compañía:</h2>
            </div>
            <div className="col-md-8">
              <h2 className='subTitle'>44 años haciendo historia.</h2>
              <h3 className='subDesc'>Todo comenzó un 31 de enero de 1979</h3>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <img src="./imgNs2.jpg" alt="" className='img-fluid imgExtra' />
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
                      <SwiperSlide>
                      <div className="pane">
                      <h3>1979</h3>
                      <hr />
                    <p>Suministros Industriales y Servicios SIS S.AS es una empresa familiar fundada en la ciudad de Bogotá - Colombia en el año 1979 por el ingeniero Alonso Barajas Castillo el cual desempeñó el cargo de gerente general de la compañía por más de 40 años. </p>
<p>El objetivo de la compañía desde sus inicios ha sido ser pioneros en poder suministrar equipos hidráulicos de calidad a diversas industrias a nivel nacional, así como también la fabricación y distribución de plásticos de ingeniería y la importación y exportación de láminas plásticas para uso ortopédico en polipropileno y polietileno (PP-PE).</p>
<p>Desde entonces, la compañía ha sido orientada a la representación, distribución, prestación de servicios de asesoría, mantenimiento de repuestos y equipos de bombeo para la industria petrolera, gas, agrícola, química, tratamiento de aguas, minera, cementera, entre otras.</p>
                      </div>
                      </SwiperSlide>
                      <SwiperSlide>
                      <div className="pane">
                      <h3>2008</h3>
                      <hr />
                    <p>En el año 2008 la compañía implementó nuevas estrategias de mercado a nivel internacional y logró consolidar nuevas alianzas con marcas de distintos países tales como Dosivac e Indesur de Argentina, Titán, o’Drill-MCM, Cat Pumps de Estados Unidos, entre otras logrando así la representación oficial de sus equipos en Colombia.</p>
                    <p>Con el fin de dar respuesta a las necesidades de los clientes y brindar soluciones integrales a solicitud de Weatherford en el año 2012, se implementó la entrega de equipos paquetizados la cual fue implementada como un servicio adicional ofrecido a cada uno de nuestros clientes, su objetivo, garantizar el buen funcionamiento de los equipos, los accesorios requeridos para su debida instalación y funcionamiento.</p>
                      </div>
                      </SwiperSlide>
                      <SwiperSlide>
                      <div className="pane">
                      <h3>2020</h3>
                      <hr />
                   <p>En el año 2020 la compañía cambio su estructura organizacional designando como gerente general al accionista Omar Alonso Barajas, el cual se venía desempeñando como gerente comercial. Este cambio directivo trajo consigo la creación de una junta directiva la cual tiene como presidente al ingeniero Alonso Barajas Castillo fundador y ex gerente general de la compañía.</p>
                   <p>En Suministros Industriales y Servicios SIS S.AS. nuestro objetivo principal es posicionarnos en el mercado como una empresa diligente y responsable en la comercialización de soluciones integrales para nuestros clientes, asociadas con la dosificación, bombeo de fluidos, y plásticos de ingeniería, ofreciendo insumos y capacitación técnica a nuestros clientes en el montaje, operación y mantenimiento de equipos; con el fin de generar los beneficios necesarios y la satisfacción para los socios, colaboradores y clientes. </p>
                      </div>
                      </SwiperSlide>
                    
                  </Swiper>

                   </div>
                </div>
               

                  <div className="boxYear"> 
                  <Swiper
                    onSwiper={setThumbsSwiper}
                    spaceBetween={10}
                    slidesPerView={3}
                    direction={'vertical'} 
                    watchSlidesProgress={true}
                    modules={[Navigation, Thumbs]}  
                    className="mySwiperThmbBoxTime"
                  >
                      <SwiperSlide>
                      <div className="numberDate">
                        <h4>1988</h4>
                      </div>
                      </SwiperSlide>
                      <SwiperSlide>
                      <div className="numberDate">
                        <h4>1988</h4>
                      </div>
                      </SwiperSlide>
                      <SwiperSlide>
                      <div className="numberDate">
                        <h4>1988</h4>
                      </div>
                      </SwiperSlide> 
                  </Swiper>
                  </div> 

              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='politicas pt-5 pb-5'>
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <h2 className='subTitle'>Políticas de calidad</h2>
            </div>
            <div className="col-md-8">
              <p>Partimos de una cultura empresarial basada en la calidad de nuestros servicios, en la comercialización óptima de nuestros productos y aseguramos un servicio de mantenimiento preventivo y correctivo a partir de capacitaciones que garanticen un servicio de alta calidad, ya que contamos con un equipo que da respuesta a los requerimientos de nuestros clientes basados en el seguimiento del sistema de gestión en el marco de los requisitos legales y reglamentarios.</p>
            </div>
          </div>
          <div className="row pt-5">
            <div className="col-md-4 mb-5">
              <h4 className='title'>Objetivos:</h4>
            </div>
            <div className="col-md-4 mb-5">
              <div className="itemNum">
                <span>
                  1
                </span>
                <p>
                Garantizar el mejoramiento continuo de la eficacia del sistema de gestión.
                </p>
              </div>
            </div>
            <div className="col-md-4 mb-5">
            <div className="itemNum">
                <span>
                  2
                </span>
                <p>
                Lograr la satisfacción del cliente.
                </p>
              </div>
            </div>
            <div className="col-md-4 mb-5">
            <div className="itemNum">
                <span>
                  3
                </span>
                <p>
                Lograr la satisfacción del cliente.
                </p>
              </div>
            </div>
            <div className="col-md-4 mb-5">
            <div className="itemNum">
                <span>
                  4
                </span>
                <p>
                Lograr la satisfacción del cliente.
                </p>
              </div>
            </div>
            <div className="col-md-4 mb-5">
            <div className="itemNum">
                <span>
                  5
                </span>
                <p>
                Lograr la satisfacción del cliente.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

    </motion.div>
  )
}

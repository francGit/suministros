import React from 'react'
import { motion } from 'framer-motion'
export const Nosotros = () => {
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
            
            </div>
          </div>
        </div>
      </div>

    </motion.div>
  )
}

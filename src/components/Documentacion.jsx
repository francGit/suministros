import React, { useEffect, useState } from 'react'
import { NavLink } from "react-router-dom"; 
import Icondwn from '../assets/Iconly-Download-red.svg'   
import { ContacBanner } from "./utils/ContacBanner";
import { motion } from "framer-motion"; 
import useFethData from '../hooks/useFetchData'
import {docUrl} from '../../config'
import {relCatSubUrl} from '../../config'
import { Preloader } from './utils/Preloader';   
export const Soporte = () => { 
   const { loading, result, error } = useFethData(`${docUrl}`);
 
  
   if (loading) return <Preloader />;
  return (
    <motion.div className="main pHead catBox"
    initial={{opacity:0}}
    animate={{opacity:1}}
    exit={{opacity:0,transition:{duration:1}}}
    >
     <section>
     <div className="container">
        <div className="row">
      
          <div className="col-md-12 p-5 pb-0">
            <motion.div className="boxRigth"
              initial={{ opacity: 0, y:"30%" }}
              transition={{delay:0.3, duration:0.9} } 
              whileInView={{ opacity: 1, y:0 }}
              viewport={{ once: true }}
            >
               <div className="boxTop">
               <div className="boxFiles"> 
                   <h1 className="titularPage">DOCUMENTACIÓN</h1>
                </div>
            
             
               </div>
               <hr className="hrline" />  
               <h4>Sección en donde encontrara los documentos necesarios legales públicos.</h4>
                  <p>Tenga encuenta que si necesita alguna otra información especifica, por favor comuniquese con atención al cliente.</p>
                  <div className="actions mt-5">
                 
                        <div className="boxFiles"> 
                        <div className="listFiles">
                       
                            { 
                              result && result.listado_de_documentos && Object.values(result.listado_de_documentos).map((file,i)=>(
                                <div className="file" key={i}>
                                <NavLink to={file.link_documento} target='_blank'><span>{file.texto_documento}</span> <i><img src={Icondwn} alt="" /></i></NavLink> 
                                </div> 
                              ))
                            }

                           
                        
                      
                      </div> 
                </div>
                     
                  </div>
            </motion.div>
          </div>
        </div>
      </div>
     </section>
     <section>
     <motion.div className="container"
      initial={{ opacity: 0, y:"30%" }}
      transition={{delay:0.3, duration:0.9} } 
      whileInView={{ opacity: 1, y:0 }}
      viewport={{ once: true }}
     >
        <div className="row"> 
          <div className="col-md-12 px-5 pb-5">
          <div className="contCards">
                      
                    <ContacBanner/>
               </div>
          </div>
        </div>
      </motion.div>
     </section>
    </motion.div>
  )
}

import React from 'react'
import { FaSlidersH } from "react-icons/fa";
import CardProd from './layout/CardProd';
import { motion } from 'framer-motion';
import useFethData from '../hooks/useFetchData'
import {catUrl} from '../../config'
import { Preloader } from './utils/Preloader';  
const Productos = () => {
  const { loading, result, error } = useFethData(`${catUrl}`);
 
  if (loading) return <Preloader />; 
  const resultDescendente = result && [...result].reverse();
  return (
    <motion.div className='main'
    initial={{opacity:0}}
    animate={{opacity:1}}
    exit={{opacity:0,transition:{duration:1}}}
    >
        <div className="headerProd">
            <div className="container">
              <div className="row d-flex justify-content-between align-items-center">
                <div className="col"><h2 className='title'>PRODUCTOS</h2></div>
                <div className="col">
                  <div className="boxfilter">
                      <h3><i><FaSlidersH/></i> Filtrar por</h3>
                      <div className="boxItemFilters pt-3">
                        <select name="" id="pais">
                        <option value="">PAÍS</option>
                        <option value="">Colombia</option>
                        <option value="">Argentina</option>
                        <option value="">España</option>
                        </select>
                        <select name="" id="marca">
                        <option value="">MARCA</option>
                        <option value="">INDESUR</option>
                        </select>
                        <select name="" id="producto">
                        <option value="">PRODUCTO</option>
                        <option value="">PRODUCTO1</option>
                        <option value="">PRODUCTO2</option>
                        </select>
                      </div>
                  </div>
                </div>
              </div>
            </div>
        </div>
        <section>
            <div className="container p-0 pb-5">
                <div className="row pt-5 gridCards"> 
                  {
                    resultDescendente && resultDescendente.map((categoria,index)=>( 
                      <CardProd key={index} link="/categoria" categoria={categoria}/>
                  
                    ))
                  }
                 
               
                 
                </div>
            </div>
        </section>
    </motion.div>
  )
}

export default Productos
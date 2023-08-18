import React from 'react'
import { FaSlidersH } from "react-icons/fa";
import CardProd from './layout/CardProd';
import { motion } from 'framer-motion';
import useFethData from '../hooks/useFetchData'
import {catUrlWp} from '../../config'
import { Preloader } from './utils/Preloader';  
const Productos = () => {
  const { loading, result, error } = useFethData(`${catUrlWp}/?per_page=100`);
 
  if (loading) return <Preloader />;  
  const filteredResult = result.filter(categoria => categoria.parent === 0);
  return (
    <div className='main' >
        <div className="headerProd">
            <div className="container">
              <motion.div className="row d-flex justify-content-between align-items-center"
                initial={{ opacity: 0, y:"30%" }}
                transition={{delay:0.3, duration:0.9} } 
                whileInView={{ opacity: 1, y:0 }}
                viewport={{ once: true }}
              >
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
              </motion.div>
            </div>
        </div>
        <section>
            <div className="container p-0 pb-5">
                <div className="row pt-5 gridCards"> 
                  {
                    filteredResult && filteredResult.map((categoria,index)=>( 
                      <CardProd key={index} link="/categoria" categoria={categoria}/> 
                    ))
                  }
                 
               
                 
                </div>
            </div>
        </section>
    </div>
  )
}

export default Productos
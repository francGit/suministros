import { motion } from 'framer-motion'
import React from 'react'
export const Contacto = () => {
  return (
    <motion.div className='main pHead'
    initial={{opacity:0}}
    animate={{opacity:1}}
    exit={{opacity:0,transition:{duration:1}}}
    >

      <section className='Contact'>
        <div className="container">
          <div className="row">
            <div className="col-md-8">
                <h1 className=''>Contacto</h1>
            </div>
            <div className="col-md-4"></div>
          </div>
        </div>
      </section>

    </motion.div>
  )
}

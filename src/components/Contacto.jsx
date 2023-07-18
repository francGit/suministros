import { motion } from 'framer-motion'
import React from 'react'
export const Contacto = () => {
  return (
    <motion.div className='main pHead'
    initial={{opacity:0}}
    animate={{opacity:1}}
    exit={{opacity:0,transition:{duration:1}}}
    >Contacto</motion.div>
  )
}

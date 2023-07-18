import React from 'react'
import { motion } from 'framer-motion'
export const Nosotros = () => {
  return (
    <motion.div className='main pHead'
    initial={{opacity:0}}
        animate={{opacity:1}}
        exit={{opacity:0, transition:{duration:1}}}
    >Nosotros</motion.div>
  )
}

import React, { useState } from 'react'
import LogoFooter from '../../assets/logo-withe.svg' 
import useFethDataOption from '../../hooks/useFetchDataOption'
import {optiontUrl} from '../../../config'
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import {Grid} from '@mui/material'
import { BsXCircle } from "react-icons/bs"; 
export const Footer = () => {
  const {loadingOption, resultOption, errorOption} = useFethDataOption(`${optiontUrl}`) 
  const [open, setOpen] = useState(false);
  const [openB, setOpenB] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleOpenB = () => setOpenB(true);
  const handleCloseB = () => setOpenB(false);
  
  if(loadingOption) return <p></p>
  return (
    <section className="footer">
    <div className="container">
     <div className="row d-flex justify-content-between">
       <div className="col-md-2">
          <div className="logoFooter pt-3">
            <img src={LogoFooter} alt="" />
          </div>
       </div>
       <div className="col-md-3">
       <div dangerouslySetInnerHTML={{ __html: resultOption.info_contacto }}/>
       </div>
       <div className="col-md-3">
       <div dangerouslySetInnerHTML={{ __html: resultOption.contacto_emails }}/> 
       </div>
       <div className="col-md-3">
        <h5>Síguenos:</h5>
       <ul className='px-0 d-flex justify-content-start gap-2 redes'>
        {
          resultOption.redes && Object.values(resultOption.redes).map((item,i)=>(
            <li key={i}><a href={item.link} target="_blank" rel="noreferrer"><i className={`fa ${item.icon}`}></i></a></li>
          ))
        }
         {/* <li><a href="https://www.behance.net/famupinto" target="_blank" rel="noreferrer"><FaFacebookF /></a></li>
         <li><a href="https://github.com/francGit" target="_blank" rel="noreferrer"><FaTwitter /></a></li>
         <li><a href="https://www.linkedin.com/in/francisco-jose-muneton-pinto/" target="_blank" rel="noreferrer"><FaLinkedinIn /></a></li> */}
       </ul>
       </div>
     </div>
     <div className="row pt-4 justify-content-between">
      <hr />
      <div className="col-md-4">
        <small>Copyright © 2023 Todos los derechos reservados.</small>
      </div>
      <div className="col-md-4">
        <ul className='d-flex justify-content-end gap-2'>
          <li>
            <a onClick={handleOpen}><small>Términos de uso</small></a>
          </li>
          <li>
            <a onClick={handleOpenB}><small>Politicas de privacidad</small></a>
          </li>
        </ul>
      </div>
     </div>
   </div>
   <Modal
        open={open}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className="boxModal" >
          
        <Grid container spacing={2} className='titleModal'>
          <Grid item xs={11}>
            <h3>{resultOption.titulo_terminos}</h3>
          </Grid>
          <Grid item xs={1}>
            <span onClick={handleClose}><BsXCircle/></span>
          </Grid>
          
        </Grid>
          <div className='bodyModal'>
          <div dangerouslySetInnerHTML={{ __html: resultOption.terminos_de_uso }}/>
          </div>
            
       
        </Box>
      </Modal>
   <Modal
        open={openB}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className="boxModal" >
          
        <Grid container spacing={2} className='titleModal'>
          <Grid item xs={11}>
            <h3>{resultOption.titulo_politicas}</h3>
          </Grid>
          <Grid item xs={1}>
            <span onClick={handleCloseB}><BsXCircle/></span>
          </Grid>
          
        </Grid>
          <div className='bodyModal'>
          <div dangerouslySetInnerHTML={{ __html: resultOption.politicas_de_privacidad }}/>
          </div>
            
       
        </Box>
      </Modal>
  </section>
  
  )
}

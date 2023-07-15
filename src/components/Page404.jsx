import React from 'react' 
import video from '../assets/animation_404b.mp4'
import { NavLink } from "react-router-dom"
const Page404 = () => {
  return (
    <div className='main d-flex justify-content-center'>
      <div className="box404 align-items-center">
       <div className="boxVideo">
          <video width="100%" height="500" loop muted autoPlay >
              <source src={video} type="video/mp4"/> 
            </video>
       </div>
        <p> No se encontro la página que buscas...</p>
        <NavLink to="/">VOLVER AL INICIO</NavLink>
      </div>
    </div>
  )
}

export default Page404
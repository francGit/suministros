import React from 'react'
import SlideImg from '../assets/slide1.png'
const Inicio = () => {
  return (
    <>
      <div className="main">
        <section className='Hero'>
            <div className="container">
                <div className="row">
                    <div className="col-md-5">
                      <p>Dosificación, bombeo de fluidos, y plásticos de ingeniería.</p>
                      <div className="box">
                      <h1 className='titleHome'>LIDERES EN GESTIÓN A SUS NECESIDADES</h1>
                      </div>
                    </div>
                    <div className="col-md-7">
                      <img src={SlideImg} className='img-fluid' alt="" />
                    </div>
                </div>
                <div className="row">
                <div className="col-md-5">
                      <p>Dosificación, bombeo de fluidos, y plásticos de ingeniería.</p>
                       
                    </div>
                    <div className="col-md-7">
                      sssf
                    </div>
                </div>
            </div>
        </section>
      </div>
    </>
  
  )
}

export default Inicio

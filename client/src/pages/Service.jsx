import React from 'react'
import { useAuth } from '../store/auth'

const Service = () => {

  const { services } = useAuth();

  return (
    <section className='section-services'>
      <div className="container">
        <h1 className="main-heading">Services</h1>
      </div>

      <div className="container grid grid-three-cols">
        {
          services.map((currElem, index) => {
            return (
              <div className="card" key={index} >
                <div className="card-img">
                  <img src="/assets/images/design.png" alt="Our services info" width="200" />
                </div>

                <div className="card-details">
                  <div className="grid grid-two-cols ">
                    <p>{currElem.provider}</p>
                    <p>{currElem.price}</p>
                  </div>
                  <h2>{currElem.service}</h2>
                  <p>{currElem.description}</p>
                </div>
              </div>
              );
          })
        }

      </div>

    </section>
  )
}

export default Service
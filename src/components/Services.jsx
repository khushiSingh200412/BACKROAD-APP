import React from 'react'
import { servicesData } from '../data'

const Service = () => {
  return (
    <section class="section services" id="services">
      <div class="section-title">
        <h2>our <span>services</span></h2>
      </div>
      <div class="section-center services-center">
        {
          servicesData.map((item)=>(<article class="service">
          <span class={item.icon}><i class="fas fa-wallet fa-fw"></i></span>
          <div class="service-info">
            <h4 class={item.title}>saving money</h4>
            <p class="service-text">
              {item.info}
            </p>
          </div>
        </article>)) }
       
      </div>
    </section>
  )
}

export default Service
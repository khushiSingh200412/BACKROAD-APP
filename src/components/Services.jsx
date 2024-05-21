import React from 'react'
import { servicesData } from '../data'
import Service from "./Service";
import Heading from './Heading';
const services = () => {
  return (
    <section class="section services" id="services">

      <Heading fw="our" lw="services"/>
      
      <div class="section-center services-center">
        {
          servicesData.map((item)=>(
            <Service{...item} />
          
        )) }
       
      </div>
    </section>
  )
}

export default Service
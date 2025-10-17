import React from 'react'
import Home from '../components/Homecomponents/Home'
import About from '../components/Homecomponents/About'
import ServicesAndProducts from '../components/Homecomponents/ServicesAndProducts'
import WhyChooseUs from '../components/Homecomponents/WhyChooseUs'
import QueryForm from '../components/Homecomponents/QueryForm'

const HomePage = () => {
  return (
    <>
      <Home/>
      <ServicesAndProducts/>
      <WhyChooseUs/>
      <About/>
      <QueryForm/>
    </>
  )
}

export default HomePage

import React from 'react'
import Header from './components/header'
import Banner from './components/Banner'
import About from './components/About'
import Cattegory from './components/Swipper'
import Product from './components/Product'

const App = () => {
  return (
    <div>
      <Header />
      <Banner />
      <Cattegory />
      <Product/>
      <About />

    </div>
  )
}

export default App
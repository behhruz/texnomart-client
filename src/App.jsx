import React from 'react'
import Header from './components/header'
import Banner from './components/Banner'
import About from './components/About'
import Cattegory from './components/Swipper'
import Product from './components/Product'
import FooterSection from './components/footerSection'
import Footer from './components/footer'

const App = () => {
  return (
    <div>
      <Header />
      <Banner />
      <Cattegory />
      <Product />
      <About />
      <FooterSection />
      <Footer />
    </div>
  );
};

export default App;

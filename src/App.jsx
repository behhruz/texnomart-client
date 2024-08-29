import React from 'react';
import Header from './components/Header'; // Adjust the path if necessary
import Banner from './components/Banner';
import Product from './components/Product';
import About from './components/About';
import FooterSection from './components/footerSection';
import Footer from './components/footer';

const App = () => {
  return (
    <div>
      <Header />
      <Banner />
      <Product />
      <About />
      <FooterSection />
      <Footer />
    </div>
  );
};

export default App;

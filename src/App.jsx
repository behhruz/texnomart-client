import React from 'react';
import Banner from './components/Banner';
import About from './components/About';
import Header from './components/Header';
import FooterSection from './components/FooterSection';
import Cattegory from './components/Swipper';
import Footer from './components/Footer';



const App = () => {
    return (
        <>
            <div>
                <Header />
                <Banner />
                <Cattegory />
                <About />
                <FooterSection />
                <Footer />
            </div>
        </>

    );
};

export default App;


